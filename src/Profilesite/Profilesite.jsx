import React, { Component } from 'react';

import {useRouteMatch ,Switch, Route, Link} from 'react-router-dom';
import Aboutsite from './Aboutsite/Aboutsite.jsx';
import Peoplesite from './Peoplesite/Peoplesite.jsx'
import Updatesite from './Updatesite/Updatesite.jsx'
import './styles.css'
const Profilepage=()=>{
    const {url,path}= useRouteMatch()
    return(
        
        <div className= 'mainbox'>
            <div  className='topbars'>
            <Link to ={`${url}/about`}>
            <button className='info'>About</button>
            </Link>
            <Link to ={`${url}/peoples`}>
            <button className='info'>Related Peoples</button>
            </Link>
            <Link to ={`${url}/otherupdates`}>
            <button className='info'>New Updates</button>
            </Link>
            </div>
            <Switch>
            <Route path={`${path}/about`} component={Aboutsite}/>
            <Route path={`${path}/peoples`} component={Peoplesite}/>
            <Route path={`${path}/otherupdates`} component={Updatesite}/>
            </Switch>
        </div>
      
    )
}
export default Profilepage;