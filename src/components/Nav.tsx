import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <ul>
                <li><NavLink exact={true} activeStyle={{ fontSize:24, fontWeight:'bold'}} to="/">Home</NavLink></li>
                <li><NavLink activeStyle={{ fontSize:24}} to="/about">소개</NavLink></li>
                <li><NavLink activeStyle={{ fontSize:24}} to="/posts">Posts</NavLink></li>
                <li><NavLink to="/admin">Admin</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;