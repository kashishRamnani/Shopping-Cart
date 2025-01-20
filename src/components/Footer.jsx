import React from 'react';
import { Link } from 'react-router-dom';

const title = "About ShopCart";
const desc = "Eduaid theme number one world class university in the world. There are students always studying in this university.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    { iconName: 'icofont-google-map', text: 'New York, USA.' },
    { iconName: 'icofont-phone', text: '+880 123 456 789' },
    { iconName: 'icofont-envelope', text: 'info@shopcart.com' },
];

const socialList = [
    { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook' },
    { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter' },
    { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin' },
    { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram' },
    { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest' }
];

const ItemList = [
    { text: 'All Products', link: '/shop' },
    { text: 'Shop', link: '/shop' },
    { text: 'Blog', link: '/blog' },
    { text: 'About', link: '/about' },
    { text: 'Policy', link: '#' },
    { text: 'FAQs', link: '/about' }
];

const quickList = [
    { text: 'Summer Sessions', link: '#' },
    { text: 'Events', link: '#' },
    { text: 'Gallery', link: '#' },
    { text: 'Forums', link: '#' },
    { text: 'Privacy Policy', link: '#' },
    { text: 'Terms of Use', link: '#' }
];

const tweetList = [
    { iconName: 'icofont-twitter', desc: "Aminur Islam @ShopCart Greetings! #HTML_Template Grab your item, 50% Big Sale Offer!!" },
    { iconName: 'icofont-twitter', desc: "Somrat Islam @ShopCart Hey! #HTML_Template Grab your item, 50% Big Sale Offer!!" }
];

const footerbottomList = [
    { text: 'Faculty', link: '#' },
    { text: 'Staff', link: '#' },
    { text: 'Students', link: '#' },
    { text: 'Alumni', link: '#' }
];

const Footer = () => {
    return (
        <footer className='style-2'>
            <div className='footer-top dark-view padding-tb'>
                <div className='container'>
                    <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center'>
                        <div className='col'>
                            <div className='footer-item our-address'>
                                <div className='footer-inner'>
                                    <div className='footer-content'>
                                        <div className='title'>{title}</div>
                                        <div className='content'>
                                            <p>{desc}</p>
                                            <ul className='lab-ul office-address'>
                                                {addressList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}></i> {val.text}
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul className='lab-ul social-icons'>
                                                {socialList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='footer-item'>
                                <div className='footer-inner'>
                                    <div className='footer-content'>
                                        <div className='title'>{ItemTitle}</div>
                                        <div className='content'>
                                            <ul className='lab-ul'>
                                                {ItemList.map((val, i) => (
                                                    <li key={i}>
                                                        <Link to={val.link}>{val.text}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='footer-item'>
                                <div className='footer-inner'>
                                    <div className='footer-content'>
                                        <div className='title'>{quickTitle}</div>
                                        <div className='content'>
                                            <ul className='lab-ul'>
                                                {quickList.map((val, i) => (
                                                    <li key={i}>
                                                        <Link to={val.link}>{val.text}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='footer-item'>
                                <div className='footer-inner'>
                                    <div className='footer-content'>
                                        <div className='title'>{tweetTitle}</div>
                                        <div className='content'>
                                            <ul className='lab-ul'>
                                                {tweetList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}></i> {val.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='container'>
                    <div className='section-wrapper'>
                        <p>&copy; 2024 <Link to="/">ShopCart</Link> Designed By <a href="/" target='_blank' rel="noopener noreferrer">Kashish Ramnani</a></p>
                        <div className='footer-bottom-list'>
                            {footerbottomList.map((val, i) => (
                                <a href={val.link} key={i}>{val.text}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
