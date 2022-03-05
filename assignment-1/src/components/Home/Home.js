import React from 'react';
import './Home.css';

class Home extends React.Component 
{
    // ----------------------------------------
    // 
    // constructor
    //
    // ----------------------------------------   
    constructor(props)
    {
        super(props);
        this.state = {
            myState: 'This is an introduction to React JS'
        }
    }
    
    // ----------------------------------------
    // 
    // componentDidMount
    //
    // ----------------------------------------   
    componentDidMount()
    {
        setTimeout(() => {
          'Timeout'
        }, 1000);
    }
    
    // ----------------------------------------
    // 
    // render
    //
    // ----------------------------------------    
    render()
    {
        return(
            <div>
                {this.state.myState}
            </div>
        );
    }
}

export default Home
