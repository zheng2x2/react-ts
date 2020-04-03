import React from 'react'
import { Route, Link, RouteComponentProps } from 'react-router-dom'

const Posts = (props: RouteComponentProps<{}>) => {
    return (
        <div>
            <h3>PostList</h3>
            <Route path={`${props.match.url}`} render={()=><h3>PostList</h3>}/>
            <Route path={`${props.match.url}/:postId`} component={Post}/>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/posts">Posts</Link></p>
            <p><Link to="/admin">Admin</Link></p>
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
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/posts">Posts</Link></p>
            <p><Link to="/admin">Admin</Link></p>
        </div>
    );
}

export default Posts;