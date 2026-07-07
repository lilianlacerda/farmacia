import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlert } from "../../../utils/ToastAlert";
import { ClipLoader } from "react-spinners";

function FormProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });

  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      ToastAlert("Erro ao buscar produto", "erro");
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      ToastAlert("Erro ao buscar produto", "erro");
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      ToastAlert("Erro ao buscar produtos", "erro");
    }
  }

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/´produtos`, produto, setProduto);

        ToastAlert("Produto atualizado com sucesso", "sucesso");
      } catch (error: any) {
        ToastAlert("Erro ao atualizar produto", "erro");
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);

        ToastAlert("produto cadastrada com sucesso", "sucesso");
      } catch (error: any) {
        ToastAlert("Erro ao cadastrar produto", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.nome === "";

  return (
    <>
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">
          {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
        </h1>

        <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Nome do Produto</label>
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              required
              className="border-2 border-amber-50 rounded p-2"
              value={produto.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Descrição do Produto</label>
            <input
              type="text"
              placeholder="Descrição"
              name="descricao"
              required
              className="border-2 border-amber-50 rounded p-2"
              value={produto.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Qunatidade do Produto</label>
            <input
              type="number"
              placeholder="Quantidade"
              name="quantidade"
              required
              className="border-2 border-amber-50 rounded p-2"
              value={produto.quantidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Laboratorio do Produto</label>
            <input
              type="text"
              placeholder="Laboratorio"
              name="laboratorio"
              required
              className="border-2 border-amber-50 rounded p-2"
              value={produto.laboratorio}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Preço do Produto</label>
            <input
              type="number"
              placeholder="0.00"
              name="preco"
              step="0.01"
              required
              className="border-2 border-amber-50 rounded p-2"
              value={produto.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Foto do Produto</label>
            <input
              type="text"
              placeholder="foto"
              name="foto"
              required
              className="border-2 border-amber-50 rounded p-2"
              value={produto.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Categoria do Produto</p>
            <select
              name="categoria"
              id="categoria"
              className="border p-2 border-amber-50 rounded"
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled>
                Selecione uma categoria
              </option>

              {categoria.map((categoria) => (
                <>
                  <option value={categoria.id}>{categoria.nome}</option>
                </>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          >
            disabled={carregandoCategoria}
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default FormProduto;
