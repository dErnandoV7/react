import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

import "./App.css";

function App() {
  // 1. Resgatando dados

  // 4. Custom Hooks
  const { data: items, httpConfig, loading } = useFetch(url);

  // 2. enviando dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 5. Refatorando post
    httpConfig(
      {
        name,
        price,
        id: items[items.length - 1].id + 1,
      },
      "POST"
    );
  };

  return (
    <div className="App">
      <h1>HTTP em React</h1>

      {/* 1. Resgatando dados */}
      {loading && <p>Carregando...</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
      </ul>

      {/* 2. Enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Insira seu nome"
            />
          </label>

          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Insira o preço do produto"
            />
          </label>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default App;
