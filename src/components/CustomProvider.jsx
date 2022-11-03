import { createContext } from "react";
const contexto = createContext();

const { Provider } = contexto;

const CustomProvider = (props) => {
  const valorDelContexto = {
    tweets: [],
  };

  return <Provider value={valorDelContexto}>{props.children}</Provider>;
};

export default CustomProvider;
