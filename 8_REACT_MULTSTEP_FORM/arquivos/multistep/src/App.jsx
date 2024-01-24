// Componentes
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

// Hooks
import { useForm } from "./hooks/UseForm";

import "./App.css";

function App() {
  const components = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(components);

  return (
    <div className="App">
      <header>
        <h1>Deixe sua avaliação</h1>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </header>
      <div className="form-container">
        <p>etapas</p>
        <div className="inputs-container">{currentComponent}</div>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
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
