export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-industrial-ink/10 bg-industrial-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-2xl font-bold tracking-tighter uppercase mb-2">
            Bilfit <span className="text-industrial-accent">BiH</span>
          </span>
          <p className="text-xs opacity-50 uppercase tracking-widest">
            © 2026 Bilfit AG Bosna i Hercegovina. Sva prava zadržana.
          </p>
        </div>

        <div className="flex gap-8 text-xs uppercase font-bold tracking-widest opacity-60">
          <a href="#" className="hover:text-industrial-accent transition-colors">Privatnost</a>
          <a href="#" className="hover:text-industrial-accent transition-colors">Impresum</a>
          <a href="https://bilfit.ag" target="_blank" rel="noopener noreferrer" className="hover:text-industrial-accent transition-colors">Bilfit AG Švicarska</a>
        </div>
      </div>
    </footer>
  );
}
