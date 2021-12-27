import React, { Component } from 'react';
import {BrowserRouter as Router , Switch, Route,Link} from 'react-router-dom'
import Homesite from '../Homesite/Homesite.jsx'
import Profilesite from '../Profilesite/Profilesite.jsx'
import './styles.css'
class Mainsite extends React.Component {
    render() { 
        return (
            <Router>
                <div className= "headline">
                   
                    <Link to='/'>
                        <button className="home">Home</button>
                    </Link>
                    <Link to='/profile'>
                        <button className="profile">Profile</button>
                    </Link>
                    <div className="Intro"> ViewerApp </div>
                </div>
                <Switch>
                    <Route path= '/' exact component = {Homesite}/>
                    <Route path= '/profile' component={Profilesite}/>
                </Switch>
            </Router>
        );
    }
}
 
export default Mainsite;
