import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './services/actions/index';

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
          <h1>Learning React-Redux</h1>
          <h3>For practice</h3>

          <div className="content">
            <a className="decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
            <input name="quantity" type="text" className="quantity_imput" value={myState} />
            <a className="increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
          </div>
      </div>
    </>
  )
}

export default App;
