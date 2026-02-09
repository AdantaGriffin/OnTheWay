import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './footer.module.scss';

function Footer(){
    return (
        <>
            <footer>
                <NavLink to="/">home</NavLink>
                <NavLink to="/exercises">exercise</NavLink>
                <NavLink to="/profile">profile</NavLink>
            </footer>
        </>
    )
};

export default Footer;
