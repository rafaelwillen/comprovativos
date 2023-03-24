import React, { useState } from "react";

interface ISelectBox {
  documents: FileList | null;
  setDocuments: React.Dispatch<FileList | null>;
}

function InputFile({ documents, setDocuments }: ISelectBox) {
  return (
    <div className="max-w-2xl mx-auto my-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Carregar Documento - PDF
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="document"
        type="file"
        onChange={(events: React.ChangeEvent) => {
          const file = events.target.files as unknown as FileList;
          setDocuments(file);
        }}
      />
    </div>
  );
}

export default InputFile;
