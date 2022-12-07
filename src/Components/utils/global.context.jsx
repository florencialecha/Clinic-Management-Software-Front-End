import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

// ### Paso 3: Implementación del Contexto Global

// Una vez que ya tenemos toda la estructura de nuestra aplicación podemos pasar a consumir la API realizando una llamada por fetch o axios.

// - Deberán guardar dicha información en un contexto global, junto con el theme de la app.
// - Utilizando useReducer crear los métodos necesarios para el manejo de su comportamiento (cambio de theme de la App y guardado de la respuesta de la API en el Contexto).

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider