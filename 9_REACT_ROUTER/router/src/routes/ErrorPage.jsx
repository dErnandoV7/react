import React from "react";
import { useRouteError } from "react-router-dom";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  const erro = useRouteError();
  return (
    <div>
      <h2>Opps...</h2>
      <h2>Temos um erro aqui</h2>
      <h1>{erro.status}</h1>
      <h1>{erro.statusText}</h1>
      <h3>{erro.data}</h3>
      <br />
      <Link to={'/'}>Voltar para Home</Link>
    </div>
  );
};

export default ErrorPage;
