import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (persists during session)
let complaintsData: any[] = [];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ 
      success: true, 
      data: complaintsData.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
    });
  } catch (error) {
    console.error('Error fetching:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const complaint = {
      id: Date.now().toString(),
      block_name: body.blockName,
      floor_number: body.floorNumber,
      issue_type: body.issueType,
      description: body.description,
      status: 'submitted',
      created_at: new Date().toISOString(),
    };

    complaintsData.push(complaint);

    console.log('Complaint saved:', complaint);

    return NextResponse.json({ 
      success: true, 
      data: complaint 
    }, { status: 201 });
  } catch (error) {
    console.error('Error saving:', error);
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}