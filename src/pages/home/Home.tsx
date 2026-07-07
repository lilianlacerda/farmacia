function Home() {
  return (
    <>
      <div className="bg-slate-700 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5x1 font-bold">Bem vinde a nossa Farmacia!</h2>
            <p className="text-x1">Melhores ofertas!</p>

            <div className="flex justify-around gap-4">
              <div className="rounded border-white border-solid border-2 py-2 px-4">
                Nova Categoria
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.vexels.com/media/users/3/282275/isolated/preview/670698f96aa37001fa4334056ca02de0-farmacia-coracao.png"
              alt="Imagem página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
