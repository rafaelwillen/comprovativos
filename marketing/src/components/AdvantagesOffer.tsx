import React from "react";

function AdvantagesOffer() {
  return (
    <section className="w-full py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            O que o nosso serviço oferece
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            A certeza a base de um click
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14"></div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg
              className="mx-auto"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Suporte
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Atendemos todas as necessidades e pedidos de verificação de
              Segunda a Sexta
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200"></div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <svg
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                fill="#D4D4D8"
              />
              <path
                d="M9 9H33"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 17H33"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 25H13V31H29V25H41"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Produto
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              O verificador é eficiente e encontra-se para uso 24/7
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t"></div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg
              className="mx-auto"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Metas
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Pretendemos ser uma forma de pagamento online mais segura
              validando os comprovativos tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvantagesOffer;
