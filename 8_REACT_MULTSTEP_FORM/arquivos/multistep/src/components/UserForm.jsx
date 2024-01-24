import React from "react";
import { useState } from "react";

const UserForm = () => {

  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Insira seu nome"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Insira seu email"
          required
        />
      </div>
    </form>
  );
};

export default UserForm;
