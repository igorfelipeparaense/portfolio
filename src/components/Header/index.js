import React from 'react';
import './style.css';

const Header = () => {
    return (
        <section className="container-header">
            <div className="background"></div>
            <img src="https://avatars.githubusercontent.com/u/83182736?v=4" alt="Imagem" className="picture" />
            <h1 className="name">Igor Felipe</h1>
            <h2 className="description">Front-end Developer</h2>
        </section>
    )
}

export default Header;