fetch('https://xwjvqjsfssuwxzancblt.supabase.co/rest/v1/', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3anZxanNmc3N1d3h6YW5jYmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NzE3MTYsImV4cCI6MjEwNDU0NzcxNn0.QEC-JXUE1ElN0KmgyZR9q-VUOgFlvhC_faA5oVG9ky8'
  }
})
.then(r => console.log('Connected!'))
.catch(e => console.log('Connection failed:', e))