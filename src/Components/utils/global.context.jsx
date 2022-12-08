import { useReducer } from "react";
import { createContext } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

const actions = {
  SET_THEME: 0,
  SET_DATA: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_THEME:
      return {
        ...state,
        theme: action.theme
      }
    case actions.SET_DATA:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  //Acá está la calve Florrrr
  const value = {
    theme: state.theme,
    data: state.data,
    setTheme: (theme) => {
      dispatch({ type: actions.SET_THEME, theme: theme });
    },
    setData: (data) => {
      dispatch({ type: actions.SET_DATA, data: data });
    }
  }

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider