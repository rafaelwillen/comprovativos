import React, { RefObject, SetStateAction } from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import SelectBox, { IEntity } from "./SelectBox";
import InputFile from "./InputFile";

interface Iprops {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const entities = [
  { name: "EMIS - Multicaixa Express" },
  { name: "BAI - BAI Direct" },
] as IEntity[];

function ModalDocument({ open, setOpen }: Iprops) {
  const [seleted, setSelected] = useState<IEntity>(entities[0]);
  const [documents, setDocuments] = useState<FileList | null>(null);
  const cancelButtonRef = useRef(null);

  console.log(documents);
  console.log(seleted);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex  h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="p-6 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base text-center font-semibold uppercase leading-6 text-gray-900"
                      >
                        Validação de Comprovativo
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 text-center">
                          Comprovativos bancarios digitais são documentos
                          gerados por entidades bancarios ou fintech após a
                          realização de transferência.
                          <br />
                        </p>
                      </div>
                      <SelectBox
                        entities={entities}
                        selected={seleted}
                        setSelected={setSelected}
                      />
                      <InputFile
                        documents={documents}
                        setDocuments={setDocuments}
                      />
                      <div className="w-full mt-8 hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                        <button
                          className="w-full  px-12 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          onClick={() => {}}
                        >
                          Validar o Documento
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ModalDocument;
