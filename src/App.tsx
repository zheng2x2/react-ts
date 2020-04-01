import React from 'react';
import GrandParent from './components/Prac'
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; //필수

// class App extends React.Component<{}, null> { //Generics<props, state>
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/intro">소개</Link></li>
        </ul>
      </nav>

      <Route exact={true} path="/" component={Home} />
      <Route path="/intro" render={()=><h3>소개</h3>} />
      <Route path="/contact" render={()=><h3>contact</h3>} />
      
    </Router> /* 앱을 감싸도록 써주면 어디서든지 라우터를 쓸수 있는것 */
  );
}

const Home = () => {
  return (
    <h3>Home</h3>
  );
}

export default App;
