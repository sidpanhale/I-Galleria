import React from "react";

export default function ComparisonTable({ rows, deleteRow,onToggle }) {
  return (
    <div className="text-gray-700 bg-whtie-100">
      <div className="p-4 flex">
        <h1 className="text-3xl">&nbsp; Comaprison Table</h1>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <table className="w-full text-md bg-green-200 shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Image</th>
              <th className="text-left p-3 px-5">Description</th>
              <th className="text-left p-3 px-5">Likes</th>
            </tr>
            {rows.map((row) => {
              return (
                <tr key={row.id} className="border-b hover:bg-green-100 bg-gray-100">
                  <td className="p-3 px-5">
                    <img className="h-20 w-20 rounded-md" src={row.url} alt="" />
                  </td>
                  <td className="p-3 px-5">
                    <p>{row.description}</p>
                  </td>
                  <td className="p-3 px-5">
                    <p>{row.likes}</p>
                  </td>
                  <td className="p-3 px-5 flex justify-center py-8">
                    <button
                      type="button"
                      onClick={() => {deleteRow(row.id);onToggle(row.id)}}
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
