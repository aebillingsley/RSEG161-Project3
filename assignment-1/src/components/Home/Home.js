import React from 'react';
import PropTypes from 'prop-types';

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
            myState: this.props.title
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
                <p>{this.state.myState}</p>
            </div>
        );
    }
}

Home.propTypes =
{
    title: PropTypes.string
}

export default Home
