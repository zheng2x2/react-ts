import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

import {createStore, Store} from 'redux';
// import { Provider } from 'react-redux'

const ADD_AGE = 'ADD_AGE';

export function addAge(){
  return {
    type : ADD_AGE
  }
}

function ageApp(state:{age:number}={age:35}, action: {type: 'ADD_AGE'}): {age: number} {
  if(action.type===ADD_AGE) {
    return {
      age: state.age + 1
    }
  }
  return state;
}

const store: Store<{age:number;}> = createStore(ageApp);
// const store = createStore<{ age: number; }>(ageApp);

store.subscribe(render)

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={ store }/>
      </BrowserRouter>
    </React.StrictMode>
    ,document.getElementById('root')
  );
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
