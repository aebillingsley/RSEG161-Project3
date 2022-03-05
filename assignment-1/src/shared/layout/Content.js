import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component 
{
    // ----------------------------------------
    // 
    // render
    //
    // ----------------------------------------    
    render()
    {
        return(
            <div>
                <main>{this.props.children}</main>
            </div>
        );
    }
}

Content.propTypes = {
    children: PropTypes.node.isRequired
}

export default Content