import React from 'react';

import './Button.scss'

const Button = ({children, onclick}) => {
    return ( 
        <button 
        className='add-button'
        onClick={onclick}
        > 
            {children}
        </button>
     );
}
 
export default Button;