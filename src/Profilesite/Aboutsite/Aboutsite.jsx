import React, { Component } from 'react';
import {useRouteMatch ,Switch, Route, Link} from 'react-router-dom';
import Aboutsitedetail from './Aboutsitedetail/Aboutsitedetail.jsx'
import Aboutsiteupdate from './Aboutsiteupdate/Aboutsiteupdate.jsx'

const Aboutsite=()=>{
    const {url,path}= useRouteMatch()
    return(
        <center>
        <div className= 'mainbox'>
            <div >
            <Link to ={`${url}/details`}>
            <button className='info'>Details</button>
            </Link>
            <Link to ={`${url}/update`}>
            <button className='info'>Update</button>
            </Link>
            </div>
            <Switch>
            <Route path={`${path}/details`} component={Aboutsitedetail}/>
            <Route path={`${path}/update`} component={Aboutsiteupdate}/>
            </Switch>
        </div>
        </center>
    )
}
export default Aboutsite;