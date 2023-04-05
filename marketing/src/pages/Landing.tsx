import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import AdvantagesOffer from "../components/AdvantagesOffer";
import Footer from "../components/Footer";
import ModalDocument from "../components/ModalDocument";
import Steps from "../components/Steps";
import Team from "../components/Team";

function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50 w-full">
      <ModalDocument open={open} setOpen={setOpen} />
      <div className=" w-full pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div className="w-full flex flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Nunca mais terão duvidas com os comprovativos Bancarios
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Analisamos os seus comprovativos bancarios para nunca mais
                  desconfiar de comprovativos suspeitos.
                </p>
              </div>
              <div className=" mt-8 hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                <button
                  className="px-12 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Submeta o seu comprovativos hoje
                </button>
              </div>
              <div className=" flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900  font-pj">
                    {faker.random.numeric(3)}
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Documentos
                    <br />
                    Analizados
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 font-pj">
                    {faker.random.numeric(3)}
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Comprovativos
                    <br />
                    Verdadeiros
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 font-pj">
                    {faker.random.numeric(3)}
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Documentos
                    <br />
                    Falsos
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <img
                className="w-full"
                src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <AdvantagesOffer />
      <Steps setOpen={setOpen} />
      <Team />
      <Footer />
    </div>
  );
}

export default Landing;
