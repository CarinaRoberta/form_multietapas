import * as C from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useEffect } from "react";

export const FormStep4 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  const handleNextStep = () => {
    console.log(state);
  };

  return (
    <Theme>
      <C.Container>
        <h1>
          {state.name}, confira as informações abaixo e finalize o cadastro se
          estiver tudo correto
        </h1>
        <p>
          Caso alguma informação esteja incorreta, gentileza voltar e corrigir.
        </p>
        <hr />
        <h1>Nome:</h1>
        <p>{state.name}</p>
        <h1>Experiência:</h1>
        <p>{state.level === 0 ? "Iniciante 🥳" : "Profissional 😎"}</p>
        <h1>Email:</h1>
        <p>{state.email}</p>
        <h1>GitHub:</h1>
        <p>{state.github}</p>
        <Link to="/step3" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </C.Container>
    </Theme>
  );
};
