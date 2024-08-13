// src/App.js
import React, { useState } from "react";
import { items, otherItems } from "./data";
import Header from "./components/Header";
import Checklist from "./components/Checklist";
import Footer from "./components/Footer";
import OtherItemsList from "./components/OtherItemsList";

function App() {
  const [itemList, setItemList] = useState(items);

  const handleQuantityChange = (id, newQuantity) => {
    setItemList((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow flex flex-col items-center">
        <Checklist items={itemList} onQuantityChange={handleQuantityChange} />
        <OtherItemsList items={otherItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
