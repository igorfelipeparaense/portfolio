import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Contacts from './components/Contacts/index';
import Navigation from './components/Navigation/index';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Contacts/>
            <Navigation />
        </div>
    )
}

export default App;