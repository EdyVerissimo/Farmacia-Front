
import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/home" className="text-white text-2xl font-extrabold tracking-tight hover:opacity-90 transition">
            Farmácia
          </Link>
          <div className="flex items-center gap-1">
            <Link
              to="/home"
              className="text-white/90 hover:text-white px-3 py-2 rounded-md hover:bg-white/10 transition"
            >
              Home
            </Link>
            <Link
              to="/categorias"
              className="text-white/90 hover:text-white px-3 py-2 rounded-md hover:bg-white/10 transition"
            >
              Categorias
            </Link>
            <Link
              to="/cadastrarcategoria"
              className="text-white/90 hover:text-white px-3 py-2 rounded-md hover:bg-white/10 transition"
            >
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
  
}
export default Navbar