import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./Steps.css";
import React, { useState } from "react";

const Steps = ({ currentStep }) => {
  function changeClass(index) {
    return currentStep >= index ? "active" : "";
  }
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${changeClass(1)}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${changeClass(2)}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
