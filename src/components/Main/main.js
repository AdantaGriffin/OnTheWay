import React, {useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './main.module.scss';

function Main(){
    const quotes = ['You don\'t have to be perfect, you just have to keep going.', 'One day of effort can change the direction of a lifetime.', 'Discipline is choosing what you want most over what you want now.'];

    const random = Math.floor(Math.random() * quotes.length);
const [results, SetResults] = useState([
    {
        id: '1',
        title: 'Adanta',
        list: ['push-ups', 'sit-ups', 'pull-ups', 'back-ext', 'plank', 'squats', 'dips'],
        routine: '/routine'
    },
    {
        id: '2',
        title: 'Angelo',
        list: ['exercise one', 'exercise two', 'exercise three', 'exercise four', 'exercise five', 'exercise six', 'exercise seven', 'exercise eight', 'exercise nine', 'exercise ten'],
        routine: '/routine'
    }, {
        id: '3',
        title: 'Sam',
        list: ['exercise one', 'exercise two', 'exercise three', 'exercise four', 'exercise five', 'exercise six', 'exercise seven', 'exercise eight', 'exercise nine', 'exercise ten'],
        routine: '/routine'
    },
    {
        id: '4',
        title: 'Nick',
        list: ['exercise one', 'exercise two', 'exercise three', 'exercise four', 'exercise five', 'exercise six', 'exercise seven', 'exercise eight', 'exercise nine', 'exercise ten'],
        routine: '/routine'
    }
]);
    return(
        <>
            <main>
                <div className={styles.mainContainer}>
                    <div className={styles.mainQuote}>{quotes[random]}</div>
                    <section className={styles.buttonsContainer}>
                        <NavLink to="create" className={styles.create}><img src="./plus.png" width="15px" alt="create"/> Create a Routine</NavLink>
                        <NavLink to="discover" className={styles.discover}><img src="./search.png" width="15px" alt="create"/> Discover Routines</NavLink>
                    </section>

                    <section className={styles.resultsContainer}>
                        {results.map(x => (
                            <article key={x.id} className={styles.resultCard}>
                                <h2 className={styles.name}>{x.title}</h2>
                                <p className={styles.list}>
                                    {x.list.map(x => (
                                        x + ", "
                                    ))}
                                </p>
                                <NavLink to={x.routine} className={styles.start}>
                                    start minus
                                </NavLink>
                            </article>
                        ))}
                        {/*<article className={styles.resultCard}>
                            <h2 className={styles.name}>Name</h2>
                            <ul className={styles.list}>
                                <li>routine items</li>
                                <li>routine items</li>
                                <li>routine items</li>
                            </ul>
                            <button className={styles.start}>Start</button>
                        </article>*/}
                    </section>
                </div>
            </main>
        </>
    )
};

export default Main