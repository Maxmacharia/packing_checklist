// src/components/OtherItemsList.js
import React from "react";

const OtherItemsList = ({ items }) => {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-md shadow-md w-full max-w-lg">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Other Items</h2>
      <ul className="list-disc pl-5">
        {items.map((item) => (
          <li key={item.id} className="text-gray-700">
            {item.name} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherItemsList;
