import React from "react";

function ContactUsInput() {
  return (
    <form action="#" method="POST" className="mt-8 sm:mt-10">
      <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter email address"
          className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
        />
        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
          <button
            type="submit"
            className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
          >
            Get Free Card
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactUsInput;
