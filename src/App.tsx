import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; //필수
import { RouteComponentProps, Switch, Redirect, NavLink } from 'react-router-dom';

// class App extends React.Component<{}, null> { //Generics<props, state>
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink exact={true} activeStyle={{ fontSize:24, fontWeight:'bold'}} to="/">Home</NavLink></li>
          <li><NavLink activeStyle={{ fontSize:24}} to="/intro">소개</NavLink></li>
          <li><NavLink activeStyle={{ fontSize:24}} to="/posts">Posts</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/intro" render={()=><h3>소개</h3>} />
        <Redirect from="/about" to="/intro" />
        {/* <Route exact={true} path="/posts/:postId" component={Post} /> */}
        <Route exact={true} path="/posts" component={PostList} />
        <Route exact={true} path="/posts" component={PostList} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </Router> /* 앱을 감싸도록 써주면 어디서든지 라우터를 쓸수 있는것 */
  );
}

const Home = () => {
  return <h3>Home</h3>
}

const Admin = () => { //보통 어드민 페이지는 권한이 있어야 하니까 검사후 리다이렉트하게 만들자
  const isAdmin = false;
  return isAdmin
    ? <h3>Admin</h3>
    : <Redirect to="/"/>
}

const NotFound = () => {
  return (
    <h3>Not Found</h3>
  )
}

const PostList = (props: RouteComponentProps<{}>) => {
  return (
    <div>
      <h3>PostList</h3>
      <Route path={`${props.match.url}`} render={()=><h3>PostList</h3>}/>
      <Route path={`${props.match.url}/:postId`} component={Post}/>
    </div>
  )
}

const Post = (props: RouteComponentProps<{postId: string}>) => {
  function goNextPost() {
    const nextPostId = +props.match.params.postId + 1 + '';
    props.history.push(`/posts/${nextPostId}`)
  }
  return (
    <div>
      <h3>Post {props.match.params.postId}</h3>
      <button onClick={goNextPost}>Next >></button>
      <p>{new URLSearchParams(props.location.search).get('body')}</p>
    </div>
  );
}

export default App;
