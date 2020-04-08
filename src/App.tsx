import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom'; //필수

import * as ReactRedux from 'react-redux';
import {addAge, startGithubApi, errorGithubApi, endGithubApi} from './action';
import request from 'superagent'; // yarn add superagent @types/superagent

type AppProps = {
  // store: Store<{age: number}>
  age: number;
  // onAddClick(): void;
}

// class App extends React.Component<AppProps, {}> { //Generics<props, state>
//   render(){
const App: React.SFC<AppProps & ReactRedux.DispatchProp<any> > = (props) => {

    async function getCountFromGithub(): Promise<void> {
      const dispatch = props.dispatch;
      dispatch(startGithubApi());
      let res = null;
      try{
        res = await request.get('https://api.github.com/users')
      } catch (e) {
        dispatch(errorGithubApi());
        return;
      }

      const age = JSON.parse(res.text).length;
      dispatch(endGithubApi(age)); 
    }

    return (
      <div>
        <Nav />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} /> {/* render={()=><h3>소개</h3>} */}
          <Redirect from="/intro" to="/about" /> {/* depracated */}
          <Route exact={true} path="/posts" component={Posts} /> {/* <Route exact={true} path="/posts/:postId" component={Post} /> */}
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
          <Redirect from="*" to="/" />
        </Switch>
        <div>
          {props.age} <button onClick={()=>props.dispatch(addAge())}>한해가지났다</button>
          <button onClick={()=>getCountFromGithub()}>깃헙API 비동기 호출</button>
        </div>
        <Footer/>
      </div>
    );
}

const { connect } = ReactRedux;
// 이 함수는 store.getState() 한 state 를 연결한(connect) App 컴포넌트의 어떤 props 로 줄 것인지를 리턴
// 그래서 이 함수의 리턴이 곧 App 컴포넌트의 AppProps 의 부분집합이어야 한다.
const mapStateToProps = ( state: {age: number} ) => {
  return {
    age: state.age
  }
}
// 이 함수는 store.dispatch(액션)을 연결한(connect) App컴포넌트의 어떤 props로 줄 것인지를 리턴
// 그래서 이 함수의 리턴이 곧 App 컴포넌트의 AppProps의 부분집합이어야 한다.
// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     onAddClick: () => {
//       dispatch( addAge() );
//     }
//   }
// }
const AppContainer = connect( mapStateToProps )(App);
export default AppContainer;
