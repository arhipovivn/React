import React from 'react';
import './Nav.css';
import{NavLink} from "react-router-dom";

const Nav =()=>{
    return(
        <nav className='nav'>
    <div className='item '> <NavLink  to='/Content'>Content</NavLink>   </div>   
        <div className='item'> <NavLink to='/Dialogs'>Dialogs</NavLink></div>    
    <div className='item'> <NavLink to='#'>News</NavLink></div>    
    <div className='item'> <NavLink to='#'>Friends</NavLink></div>    
    </nav>
    );
}
export default Nav;
