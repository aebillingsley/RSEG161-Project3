import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component 
{
    // ----------------------------------------
    // 
    // render
    //
    // ----------------------------------------    
    render()
    {
        const myTitle = this.props.title;
        const myUrl = this.props.url;        
        return(
            <div>
                <h1>{myTitle}</h1>
                 <base href={myUrl}/>
            </div>
        );
    }
}

Header.propTypes =
{
    title: PropTypes.string,
    url: PropTypes.string
}

export default Header