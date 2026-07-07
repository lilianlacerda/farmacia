import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-slate-700 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            Farmacia
          </Link>
          <div className="flex gap-4">
            <Link to="/produtos" className="hover:bg-slate-400">
              Produtos
            </Link>
            <Link to="/categorias" className="hover:bg-slate-400">
              Categorias
            </Link>
            <Link to="/cadastrarcategoria" className="hover:bg-slate-400">
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
