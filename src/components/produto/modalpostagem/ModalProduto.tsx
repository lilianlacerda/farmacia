import Popup from "reactjs-popup";
import FormProduto from "../formproduto/FormProduto";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
            Novo Produto
          </button>
        }
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <FormProduto />
      </Popup>
    </>
  );
}

export default ModalPostagem;
