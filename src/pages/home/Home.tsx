

function Home() {

  return (
    <>
     <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-14">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-4">
            Bem-vindo à <span className="text-emerald-600">Farmácia</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Encontre tudo o que precisa para sua saúde e bem-estar.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#categorias"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition"
            >
              Explorar categorias
            </a>
            <a
              href="#"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
  
}
export default Home