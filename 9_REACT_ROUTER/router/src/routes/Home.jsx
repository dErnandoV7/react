import React from "react";

// Carregamento de dados
import { useFetch } from "../hooks/useFetch";

import { Link } from "react-router-dom";

const url = "http://localhost:3000/products";

const Home = () => {
  const { data: items } = useFetch(url);

  return (
    <div>
      <h2>Home</h2>
      {/* Carregamento de dados */}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* Rota dinamica */}
              <Link to={`products/${item.id}`}> detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
