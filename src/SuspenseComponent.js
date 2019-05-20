import React from 'react';
import logo from './logo.svg';

const SuspenseComponent = () => (
    <div className="App" id="rootSuspense" >
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This is a Suspense Fallback App.
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

export default SuspenseComponent;