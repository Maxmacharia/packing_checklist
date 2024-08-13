// src/components/Checklist.js
import React from "react";
import ItemCard from "./ItemCard";

const Checklist = ({ items, onQuantityChange }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onQuantityChange={onQuantityChange} />
      ))}
    </div>
  );
};

export default Checklist;
