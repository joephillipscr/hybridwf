import './globals.css';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="eyebrow">Hybrid Workforce Standard</p>
          <h1 className="mt-3 font-display text-5xl font-semibold">404</h1>
          <p className="mt-3 text-muted">
            This page does not exist. · Esta página no existe.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/" className="btn-primary">
              Home
            </a>
            <a href="/es/" className="btn-outline">
              Inicio
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
