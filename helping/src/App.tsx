import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineHeart } from "react-icons/ai";
import AskFrequency from "./components/AskFrequency";
import ModalDocument from "./components/ModalDocument";
import "./index.scss";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className="w-full flex items-center justify-center py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center flex flex-col gap-6">
            <div className="flex items-center  justify-center gap-4">
              <AiOutlineHeart className="items-center" size={42} color="#000" />
              <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">
                Seja solitário
              </h2>
              <AiOutlineHeart className="items-center" size={42} color="#000" />
            </div>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Faça uma doação para ajudar no crescimento da solução, como futura
              plataforma para validar pagamento com comprovativos bancarios.
            </p>
            <div className="flex items-center justify-center">
              <button
                className=" flex gap-2 px-12 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <AiOutlineHeart
                  className="items-center"
                  size={26}
                  color="#fff"
                />
                Doar
              </button>
            </div>
            <iframe
              className="h-96"
              src="https://embed.lottiefiles.com/animation/74802"
            ></iframe>
          </div>
        </div>
        <ModalDocument open={open} setOpen={setOpen} />
      </section>
      <AskFrequency />
    </div>
  );
};
export default App;
