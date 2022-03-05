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
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Header title="Welcome to WebDevTech React" url="http://localhost:3000"/>
            </header>
            
            <content className="App-content">
                <Content>
                    <Home title="This is an introduction to React JS"/>
                </Content>
            </content>
            
            <footer className="App-footer">
                <Footer myText="@ WebDevTech React 2021" />
            </footer>
        </div>
      );
    }
}

export default App;
