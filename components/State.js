import React, { useState } from "react";

const State = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  const removeItems = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  return (
    <div>
      <h1>Items</h1>
      <button onClick={addItem}>AddItem</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItems(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default State;
