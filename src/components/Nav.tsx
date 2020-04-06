import React, { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {

    state = {
        navActive: false,
    }

    render(){
        const class1 = ["burger"];
        const class2 = ["links"];
        if(this.state.navActive) {
            class1.push('nav-active toggle');
            class2.push('nav-fade');
        }
        return(
            <nav>
                <div className="logo">
                    <NavLink to="/" exact={true} ><h3>Reactive TS</h3></NavLink>
                </div>
                <ul className="nav-links" >
                    <li className={class2.join(' ')}><NavLink activeStyle={{ fontSize:18}} to="/about">About</NavLink></li>
                    <li className={class2.join(' ')}><NavLink activeStyle={{ fontSize:18}} to="/proj">Project</NavLink></li>
                    <li className={class2.join(' ')}><NavLink activeStyle={{ fontSize:18}} to="/posts">Posts</NavLink></li>
                    <li className={class2.join(' ')}><NavLink activeStyle={{ fontSize:18}} to="/admin">Admin</NavLink></li>
                </ul>
                <div className={class1.join(' ')} onClick={this.listenToBurger.bind(this)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            
        );
    }

    listenToBurger: any = (e : MouseEventHandler<HTMLElement>) =>{
        // e.preventDefault();
        // const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        this.setState({navActive:!this.state.navActive});
    
        navLinks.forEach((link, idx) => {
            // const fade=`navLinkFade 0.5s ease forwards ${idx/3.7725}s`;
        });    
    }
}

export default Nav;