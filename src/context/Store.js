import React, { createContext, useReducer } from 'react';

import { Reducer } from './Reducer';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    users: [],
    isActive: false
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

  const switchDisabled = (bool) => {
    dispatch({
      type: "STATE_BUTTON",
      payload: { bool }
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        isActive: state.isActive,
        getRandomUser,
        switchDisabled       
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
