import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom'; //필수
import { Store } from 'redux';
import { addAge } from './index';

type AppProps = {
  store: Store<{age: number}>
}

class App extends React.Component<AppProps, {}> { //Generics<props, state>
// function App() {

  render(){

    const store = this.props.store;
    const state = store.getState();

    return (
      <div>
        <Nav />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} /> {/* render={()=><h3>소개</h3>} */}
          <Redirect from="/intro" to="/about" />
          <Route exact={true} path="/posts" component={Posts} />
          {/* <Route exact={true} path="/posts/:postId" component={Post} /> */}
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
          <Redirect from="*" to="/" />
        </Switch>
        <div>
        {state.age}
        <button onClick={()=>{
          store.dispatch(addAge())
        }}>한해가지났다</button>
        </div>
      </div>
    );
  }
}

export default App;
