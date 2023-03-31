import React from 'react';
import './Header.css'
import cardImage from '../../assets/image/pexels-photo-614810.webp'

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-light mb-5">
            <div className="container">
                <a className="navbar-brand" href="/"><b>knowledge-cafe</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="qustion.html">Qustion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                    <div>
                        <img className='header_img' src={cardImage}/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;