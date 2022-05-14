import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Service from './service'
import Contact from './ContactUs';
// import Gallery1 from './Gallery';
import Gallery1 from './GalleryForBuilt';
import HRDPage from './HDRBleeding';
import DayDustPage from './DayDust';
import FlashAmbPage from "./FlashAmb";
import DronePage from "./Drone";
import SkyPage from "./Skyreplace";
import VirtualPage from "./VirtualLight";

import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>    
        <HashRouter>
          <Header />
            <div onClick={() => {document.getElementById("mySidenav").style.width = "0"}}>
                    <Switch>                    
                        <Route exact path={'/home'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/service'} component={Service}/>
                        {/* <Route exact path={'/gallery'} component={Gallery}/> */}
                        <Route exact path={'/gallery'} component={Gallery1}/>
                        <Route exact path={'/contact-us'} component={Contact}/>
                        <Route exact path={'/hdrbleeding'} component={HRDPage}/>
                        <Route exact path={'/daytodust'} component={DayDustPage}/>
                        <Route exact path={'/flashambient'} component={FlashAmbPage}/>
                        <Route exact path={'/drone'} component={DronePage}/>
                        <Route exact path={'/skyreplacement'} component={SkyPage}/>
                        <Route exact path={'/virtualtwilight'} component={VirtualPage}/>
                        <Redirect from='/' to='/home'/>
                    </Switch>
            </div>
          <Footer/>
        </HashRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);