import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component 
{
    // ----------------------------------------
    // 
    // render
    //
    // ----------------------------------------    
    render()
    {
        const myText = this.props.myText;
        return(
            <div>
                <h1>{myText}</h1>
            </div>
        );
    }
}

Footer.propTypes =
{
    myText: PropTypes.string
}

export default Footer