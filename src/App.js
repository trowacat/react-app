import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

// Components imports
import Navbar from './Components/Navbar';
import ToggleButton from './Components/ToggleButton';
import LandingPage from './Components/LandingPage';
import HotDeals from './Components/HotDeals';
import Cart from './Components/Cart';
import Gallery from './Components/Gallery';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Stores from './Components/Stores';
import Upload from './Components/Upload';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div id="content">
          <ToggleButton />
        
          <Switch>
            <Route exact path='/' render={() => (
              <LandingPage />
            )} />
            <Route exact path='/promotions' render={() => (
              <HotDeals />
            )} />
             <Route exact path='/stores' render={() => (
              <Stores />
            )} />
             <Route exact path='/cart' render={() => (
              <Cart />
            )} />
             <Route exact path='/upload' render={() => (
              <Upload />
            )} />
             <Route exact path='/gallery' render={() => (
              <Gallery />
            )} />
             <Route exact path='/profile' render={() => (
              <Profile />
            )} />
             <Route exact path='/settings' render={() => (
              <Settings />
            )} />
            <Route render={() => (
              <h1>Not Found</h1>
            )} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
