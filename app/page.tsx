export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-20 mt-10">
        <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-gold tracking-tighter">
          Crónicas de Poder
        </h1>
        <p className="text-lg sm:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10">
          Explorando las historias, estrategias y personajes que moldearon el mundo. Únete a nuestra comunidad y descubre los secretos del poder.
        </p>

        {/* Email Capture Form */}
        <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            required
            className="flex-1 px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-foreground placeholder:text-foreground/50 transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gold text-background font-semibold rounded-md hover:bg-gold/90 transition-colors"
          >
            Suscribirse
          </button>
        </form>
      </header>

      {/* Featured Videos Grid */}
      <main className="w-full max-w-6xl mx-auto p-8 sm:p-20 pt-0">
        <h2 className="text-3xl font-bold mb-8 text-center sm:text-left border-b border-white/10 pb-4">
          Videos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Card Placeholder 1 */}
          <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-gold/50 transition-colors group cursor-pointer">
            <div className="aspect-video bg-white/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 group-hover:text-gold/50 transition-colors">Miniatura 1</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-gold transition-colors">El Ascenso de un Imperio</h3>
              <p className="text-sm text-foreground/60">Análisis detallado de las estrategias militares y políticas.</p>
            </div>
          </div>

          {/* Video Card Placeholder 2 */}
          <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-gold/50 transition-colors group cursor-pointer">
            <div className="aspect-video bg-white/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 group-hover:text-gold/50 transition-colors">Miniatura 2</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-gold transition-colors">Maquiavelo en la Práctica</h3>
              <p className="text-sm text-foreground/60">Lecciones del Príncipe aplicadas a la historia moderna.</p>
            </div>
          </div>

          {/* Video Card Placeholder 3 */}
          <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-gold/50 transition-colors group cursor-pointer">
            <div className="aspect-video bg-white/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 group-hover:text-gold/50 transition-colors">Miniatura 3</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-gold transition-colors">Caída de los Gigantes</h3>
              <p className="text-sm text-foreground/60">Por qué fracasan las instituciones más poderosas del mundo.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-auto">
        <div className="max-w-6xl mx-auto p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Crónicas de Poder. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">YouTube</a>
            <a href="#" className="hover:text-gold transition-colors">Twitter</a>
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
