import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

const Posts = (props: RouteComponentProps<{}>) => {
    return (
        <div>
            <Route path={`${props.match.url}`} component={PostList}/>
            <Route path={`${props.match.url}/:postId`} component={Post}/>
        </div>
    )
}

const PostList = (props: RouteComponentProps<{}>) => {
    return (
        <div className="container">
            <h3>PostList</h3>
            <h4>글목록</h4>
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

export default Posts;