import React from "react";

export default function SearchBar({getImages,searchText, setSearchText}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    getImages();
  };
  
  return (
    <div>
      <div className="pt-32 flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="hero-field"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              name="hero-field"
              className="shadow w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </form>
        </div>
        <button  className=" shadow inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          Search
        </button>
      </div>
    </div>
  );
}
