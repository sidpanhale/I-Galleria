import React from "react";

export default function Images({
  images,
  addRow,
  onToggle,
  deleteRow2,
}) {
  return (
    <section className="text-gray-600 body-font">
      {images.length ? (
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {images.map((image) => (
              <div key={image.id} className="lg:w-1/3 sm:w-1/2 p-4 ">
                <div className="flex relative ">
                  <img
                    alt=""
                    className="shadow-lg absolute rounded-xl inset-0 w-full h-full object-cover object-center "
                    src={image.urls.raw}
                  />
                  <div className="px-8 py-10 rounded-xl relative z-10 w-full border-4  border-gray-200 bg-white opacity-0 hover:opacity-50 ">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      <br />
                      <br />
                    </h2>
                    {!image.active? (
                      <button
                        onClick={() => {deleteRow2(image.id);onToggle(image.id)}}
                        className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg "
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          addRow(
                            image.id,
                            image.urls.thumb,
                            image.alt_description,
                            image.likes
                          );
                          onToggle(image.id);
                        }}
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 place-self-center h-10 w-30  focus:outline-none hover:bg-green-800 rounded text-lg "
                      >
                        Compare
                      </button>
                    )}
                    <p className="leading-relaxed">
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
