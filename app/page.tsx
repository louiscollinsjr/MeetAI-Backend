export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>MeetAI Backend</h1>
      <p>Voice-first AI assistant API</p>
      <h2>Endpoints</h2>
      <ul>
        <li><code>POST /api/chat</code> - General assistant</li>
        <li><code>POST /api/jobs</code> - MeetSai job search</li>
        <li><code>POST /api/coaching</code> - MeetNUU personal growth</li>
      </ul>
    </main>
  );
}
