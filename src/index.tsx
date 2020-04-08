import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

import {createStore, Store} from 'redux';
import {Provider} from 'react-redux';

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
const initialState = (window as any).__INITIAL_STATE__;
//서버에서 받은 초기값으로 스토어 만들기
const store: Store<{age:number;}> = createStore(ageApp, initialState);

// class Provider extends React.Component<{store: Store<{age:number}>; children: JSX.Element}> {
//   static childContextTypes = {
//     store: PropTypes.object
//   }
//   getChildComtext() {
//     return { store: this.props.store }
//   }
//   render(){ return this.props.children; }
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
