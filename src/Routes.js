import React, {useState} from 'react';
import { Router } from "react-router"
import { createBrowserHistory } from "history"
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Header from './components/Header';
import Education from './components/Education';
import Work from './components/Work';
import Seminars from './components/Seminars';
import Projects from './components/Projects';
import Other from './components/Other';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';
import Navbar from './components/NavBar';

// import about dark and light themes
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme';
import { GlobalStyles } from './components/DynamicThemeChange';


const history = createBrowserHistory();

const Routes = () => {

  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const changeTheme = () => {
      // if the theme is not light, then set it to dark
      if (theme === 'light') {
          setTheme('dark');
      // otherwise, it should be light
      } else {
          setTheme('light');
      }
  } 

  return (
    <Router history={history}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

        <GlobalStyles />

        <Header changeTheme={changeTheme}/>

        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path='/' component={App}/>
          <Route exact path='/education' component={Education}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/seminars' component={Seminars}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/other' component={Other}/>
          <Route exact path='/skills' component={Skills}/>
          
        </Switch>

        {/** Navbar sidebar for tablet-mobile */}
        <Navbar/>

        {/* Social Media Section */}
        <SocialMedia className="desktop"/>

        {/* Footer Component */}
        <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default Routes;