
function Footer() {

  return (
    <>
     <footer className="bg-slate-900/95 text-slate-200">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-90">&copy; {new Date().getFullYear()} Farmácia. Todos os direitos reservados.</p>
        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="hover:text-white/100 text-white/80 transition">Privacidade</a>
          <span className="opacity-30">•</span>
          <a href="#" className="hover:text-white/100 text-white/80 transition">Termos</a>
          <span className="opacity-30">•</span>
          <a href="#" className="hover:text-white/100 text-white/80 transition">Contato</a>
        </div>
      </div>
    </footer>
    </>
  )
  
}
export default Footer