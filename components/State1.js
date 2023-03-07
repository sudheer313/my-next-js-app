import React, { useState } from "react";

const State1 = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default State1;
