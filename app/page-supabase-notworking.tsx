'use client';

import { useState, useEffect } from 'react';
import { Upload, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Complaint {
  id: string;
  block_name: string;
  floor_number: string;
  issue_type: string;
  description: string;
  status: string;
  created_at: string;
}

interface ComplaintData {
  blockName: string;
  floorNumber: string;
  issueType: string;
  description: string;
  image?: File;
}

export default function CCPPortal() {
  const [complaint, setComplaint] = useState<ComplaintData>({
    blockName: '',
    floorNumber: '',
    issueType: '',
    description: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [fetchingComplaints, setFetchingComplaints] = useState(true);

  const issueTypes = [
    'Plumbing',
    'Electrical',
    'Water Supply',
    'Garbage/Waste',
    'Noise',
    'Maintenance',
    'Safety',
    'Other',
  ];

  // Fetch complaints on mount
  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      setFetchingComplaints(true);
      const { data, error } = await supabase
        .from('complaints')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComplaints(data || []);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    } finally {
      setFetchingComplaints(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setComplaint({ ...complaint, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!complaint.blockName || !complaint.floorNumber || !complaint.issueType || !complaint.description) {
      alert('Please fill all required fields');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('complaints')
        .insert([
          {
            block_name: complaint.blockName,
            floor_number: complaint.floorNumber,
            issue_type: complaint.issueType,
            description: complaint.description,
            status: 'submitted',
          },
        ])
        .select();

      if (error) throw error;

      // Reset form
      setComplaint({
        blockName: '',
        floorNumber: '',
        issueType: '',
        description: '',
      });
      setImagePreview(null);
      setSubmitted(true);

      // Refresh complaints list
      await fetchComplaints();

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('Failed to submit complaint');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            <span className="text-cyan-400 text-sm font-mono">Community Complaint Portal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CCP Portal
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Report issues in your building. Help your community stay safe and well-maintained.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-8 backdrop-blur-sm hover:border-cyan-400/20 transition">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-cyan-400" />
              Report a Complaint
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Block Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Block Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Block A"
                  value={complaint.blockName}
                  onChange={(e) => setComplaint({ ...complaint, blockName: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Floor Number */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Floor Number *
                </label>
                <input
                  type="text"
                  placeholder="e.g., 5"
                  value={complaint.floorNumber}
                  onChange={(e) => setComplaint({ ...complaint, floorNumber: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Issue Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Issue Type *
                </label>
                <select
                  value={complaint.issueType}
                  onChange={(e) => setComplaint({ ...complaint, issueType: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
                >
                  <option value="">Select an issue type</option>
                  {issueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description *
                </label>
                <textarea
                  placeholder="Describe the issue in detail..."
                  rows={4}
                  value={complaint.description}
                  onChange={(e) => setComplaint({ ...complaint, description: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Upload Image (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-slate-700 rounded-lg cursor-pointer hover:border-cyan-400 transition"
                  >
                    <Upload className="w-5 h-5 text-slate-400 mr-2" />
                    <span className="text-slate-400">Click to upload or drag image</span>
                  </label>
                </div>
                {imagePreview && (
                  <div className="mt-3">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-48 rounded-lg border border-cyan-400/20"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Complaint
                  </>
                )}
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Complaint submitted successfully!</span>
                </div>
              )}
            </form>
          </div>

          {/* Complaints List */}
          <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-8 backdrop-blur-sm hover:border-cyan-400/20 transition">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-purple-400" />
              Recent Complaints ({complaints.length})
            </h2>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {fetchingComplaints ? (
                <p className="text-slate-400 text-center py-8">Loading complaints...</p>
              ) : complaints.length === 0 ? (
                <p className="text-slate-400 text-center py-8">No complaints yet. Be the first to report!</p>
              ) : (
                complaints.map((comp) => (
                  <div
                    key={comp.id}
                    className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-purple-400/30 transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-white">
                          {comp.block_name} - Floor {comp.floor_number}
                        </p>
                        <p className="text-sm text-cyan-400">{comp.issue_type}</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-purple-500/20 border border-purple-500/30 rounded text-purple-300">
                        {comp.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{comp.description}</p>
                    <p className="text-xs text-slate-500">
                      {new Date(comp.created_at).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}