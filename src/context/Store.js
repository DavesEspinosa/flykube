import React, { createContext, useReducer } from 'react';
import uniqueId from 'lodash/uniqueId';
import { Reducer } from './Reducer';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    users: [],
    isActive: false,
    inputName: ''
  };
  
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getRandomUser = (name) => { 
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(({results}) => showUser(results, name));
  }

  const showUser = (results, name) =>{
    const randomId = uniqueId("prefix-");
    results.forEach(obj => {
      dispatch({
        type: "GET_USER",
        payload: { user: {...obj, randomId}, name }      
    });
    });
  }

  const setInputName = (value) =>{
    dispatch({
        type: "STATE_INPUT",
        payload: { value }
      })  
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
        inputName: state.inputName,
        setInputName,
        getRandomUser,
        switchDisabled       
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
