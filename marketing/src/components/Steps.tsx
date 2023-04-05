import React from "react";

type IProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Steps({ setOpen }: IProps) {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Como verficiar o seu comprovativo?
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              A validação é muito simples e rápido
            </p>
          </div>

          <div className="  mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    1{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Submeta o seu comprovatido Digital
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Receba o comprovatido no formato PDF de e submeta a baixo.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    2{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Escolha a entidade geradora do documento
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  No campo de seleção define que entidade gerou o documento
                  digital que pretende validar.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    3{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Aguardar a analise do documento
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Após clicar no botão para submeter o documento os nossos
                  algoritmos analizará se o documento foi alterado ou não.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="px-6 py-2 lg:px-12 justify-center lg:py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
          onClick={() => {
            setOpen(true);
          }}
        >
          Submeta o seu comprovativo
        </button>
      </div>
    </section>
  );
}

export default Steps;
