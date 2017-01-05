import React from 'react';
import styles from './App.css';

const App = () => (
    <div className={styles.app}>
        <h2>Hello, World</h2>
    </div>
);

export {App};

const AppF = function App2() {
    return <h3>You!!!</h3>;
};

export {AppF};

