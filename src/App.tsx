import React from 'react';
import About from './components/About';
import Posts from './components/Posts';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import { Route, Link } from 'react-router-dom'; //필수
import { RouteComponentProps, Switch, Redirect, NavLink } from 'react-router-dom';
// import { StaticRouter } from 'react-router'

// class App extends React.Component<{}, null> { //Generics<props, state>
function App() {
  return (
    <div> {/* <StaticRouter> */}
      {/* <nav>
        <ul>
          <li><NavLink exact={true} activeStyle={{ fontSize:24, fontWeight:'bold'}} to="/">Home</NavLink></li>
          <li><NavLink activeStyle={{ fontSize:24}} to="/about">소개</NavLink></li>
          <li><NavLink activeStyle={{ fontSize:24}} to="/posts">Posts</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
        </ul>
      </nav> */}
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
      </div> /*</StaticRouter> 앱을 감싸도록 써주면 어디서든지 라우터를 쓸수 있는것 */
  );
}

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/about">About</Link></p>
      <p><Link to="/posts">Posts</Link></p>
      <p><Link to="/admin">Admin</Link></p>
    </div>
  )
}

export default App;
