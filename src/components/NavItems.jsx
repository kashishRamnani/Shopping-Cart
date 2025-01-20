import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from '../contexts/AuthProvider';

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    const {user}= useContext(AuthContext)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header-section style-4 ${headerFixed  ? 'header-fixed fadeInUp' : ''}`}>
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to="/signup" className='lab-btn me-3'>
                            <span>Create Account</span>
                        </Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        <div className='logo-search-area'>
                            <div className='logo'>
                                <Link to="/">
                                    <img src={logo} alt="Company Logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                                <Link to="/sing-up" className='lab-btn me-3 d-none d-md-block'>
                                    Create Account
                                </Link>
                                <Link to="/login" className='d-none d-md-block'>
                                    Log In
                                </Link>
                                <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            <div className='ellepis-bar d-md-none' onClick={()=>setSocialToggle(!socialToggle)}>
                                
                        
                            <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavItems;
