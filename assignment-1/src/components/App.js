import React from 'react';
import logo from '../shared/images/logo.svg';
import './App.css';

import Home from './Home/Home';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';

class App extends React.Component 
{
    render()
    {
      return (
        <div className="App">
            <Header/>
            <Content/>
            <Home/>          
            <Footer/>
        </div>
      );
    }
}

export default App;
