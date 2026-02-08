import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './header.module.scss';

let user = 'Adanta';
function Header(){
    return (
        <>
            <header>
                <div className={styles.headerSection}>welcome back, {user}</div>
                <div className={styles.headerSection}>
                    <NavLink to="/">
                        <h1>On The Way</h1>
                    </NavLink>
                </div>
                <div className={styles.headerSection}><a href="#">Log In</a></div>
            </header>
        </>
    )
};

export default Header;