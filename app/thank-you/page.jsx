export default function ThankYou() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', backgroundColor: '#0A0A0A', color: '#ffffff' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        You're in! 🎉
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#A0A0A0', marginBottom: '2rem', textAlign: 'center' }}>
        Watch this short message from Kritagya
      </p>
      <div style={{ width: '100%', maxWidth: '720px', aspectRatio: '16/9' }}>
        <iframe
          src="https://player.vimeo.com/video/1198966045"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}
