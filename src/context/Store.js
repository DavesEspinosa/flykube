import React, { createContext, useReducer } from 'react';

import { Reducer } from './Reducer';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    users: [],
  };
  
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getRandomUser = (name) => { 
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(({results}) => showUser(results, name));
  }

  const showUser = (results, name) =>{
    results.forEach(obj => {
      dispatch({
        type: "GET_USER",
        payload: { user: obj, name }      
    });
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        getRandomUser, 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
