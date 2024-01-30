import React from "react";

// Rota dinamica
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;

  const { data: product } = useFetch(url);

  if (!product) return <p>Carregando...</p>;
  
  return (
    <div>
      <h4>Detalhes do produto</h4>
      <p>ID do produto: {id}</p>
      <p>Produto: {product.name}</p>
      <p>Preço: R$ {product.price}</p>
      <Link to={`info`}>Mais informações</Link>
    </div>
  );
};

export default Product;
