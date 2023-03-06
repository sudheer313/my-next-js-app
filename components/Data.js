import React, { useState } from "react";
import { useEffect } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/data");
      const newData = await res.json();
      setData(newData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
