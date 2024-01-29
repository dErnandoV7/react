import React from "react";

// Carregamento de dados
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products"

const Home = () => {
  const {data: items} = useFetch(url);
  
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
