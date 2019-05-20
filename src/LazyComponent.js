import React from 'react';
import logo from './logo.svg';

const LazyComponent = () => (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        This is a lazy App.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
        </header>
    </div>
);

export default LazyComponent;