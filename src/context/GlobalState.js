import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const intialState = {
  users: [],
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };
  const editUser = (id) => {
    dispatch({
      type: "EDIT_USER",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
