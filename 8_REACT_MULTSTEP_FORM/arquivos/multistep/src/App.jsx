// Componentes
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// Hooks
import { useForm } from "./hooks/UseForm";
import { useState } from "react";

import "./App.css";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  function updateFieldHandler(key, value) {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  const components = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(components);

  return (
    <div className="App">
      <header>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </header>
      <div className="form-container">
        <Steps currentStep={currentStep} changeStep={changeStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button
                type="button"
                onClick={(e) => changeStep(currentStep - 1, e)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {isLastStep ? (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            ) : (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
