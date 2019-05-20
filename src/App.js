import React, { Component, Suspense, lazy } from 'react';
import { findDOMNode } from 'react-dom';
import SuspenseComponent from './SuspenseComponent';
import './App.css';

class App extends Component {
  observer;


  getLazy() {
    return lazy(() => new Promise(resolve => {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            resolve(import('./LazyComponent'));
            this.observer.disconnect();
          }
        })
      });

    }));
  }

  componentDidMount() {
    this.observer.observe(findDOMNode(this));
  }

  render() {
    const Lazy = this.getLazy();

    return (
        <Suspense fallback={(<SuspenseComponent />)} >
          <Lazy />
        </Suspense>
    );
  }
}

export default App;
