import React from 'react';
import { Route, Link } from 'react-router-dom';

const About = () => {

    return (
        <div>
            <h3>About</h3>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/posts">Posts</Link></p>
            <p><Link to="/admin">Admin</Link></p>
        </div>
    )
}

export default About;