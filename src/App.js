import React, { useContext } from 'react'
import { GlobalContext } from './context/Store'
import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  const { getRandomUser, switchDisabled, isActive, setInputName, inputName } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName) {
      getRandomUser(inputName);
      setInputName('')   
    }
  }

  return (
    <>
    <div className="App">
        <div className='form_container'>
          <button className="btn-active" onClick={() => switchDisabled(false)}>
            Active
          </button>
          <button className="btn-inactive" onClick={() => switchDisabled(true)} >
            Inactive
          </button>
        </div>
      <div className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form-control'>
                <label htmlFor='name'>
                  <input
                      autoComplete="off"
                      required="required"
                      type='text'
                      id='name'
                      placeholder='Name'
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                  />
                </label>
              </div>
                <button className={!isActive ? "btn-active" : "btn-inactive"} id='send' type='submit' disabled={isActive ? 1 : 0} >ENVIAR</button>
            </form>        
          </div>
      </div>
      <UsersList />
    </div>
    </>
    )
}

export default App;
