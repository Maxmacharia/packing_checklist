// src/components/ItemCard.js
import React, { useState } from "react";
import Modal from "./Modal";

const ItemCard = ({ item, onQuantityChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center mb-4 p-4 bg-white shadow-md rounded-md w-full max-w-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover mr-4 rounded cursor-pointer"
          onClick={handleImageClick}
        />
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
          <p className="text-gray-700 text-sm mb-2">{item.description}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value, 10))}
            className="mt-2 p-2 border border-gray-300 rounded-md w-24"
            min="0"
          />
        </div>
        <input
          type="checkbox"
          className="ml-4"
          onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value, 10))}
        />
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} image={item.image} />
    </>
  );
};

export default ItemCard;
