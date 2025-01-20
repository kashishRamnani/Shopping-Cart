import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const title = "Register";
const btnText = "SignUp";
const socialTitle = "Login With Social Media";

export const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = () => {
        signUpWithGmail()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMsg = error.message;
                setErrorMessage("Please enter a valid email and password!");
            });
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;

        if (password !== confirmpassword) {
            setErrorMessage("Passwords don't match! Please provide the correct password.");
        } else {
            setErrorMessage(""); // Clear error message on valid input
            createUser(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Account created successfully!");
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                    alert(`${error.message}`)
                });
        }
    };

    return (
        <div className='login-section padding-tb section-bg'>
            <div className='container'>
                <div className='account-wrapper'>
                    <h3 className='title'>{title}</h3>
                    <form className='account-form' onSubmit={handleSignUp}>
                        <div className='form-group'>
                            <input type="text" name='name' id='name' placeholder='Name' required />
                        </div>
                        <div className='form-group'>
                            <input type="email" name='email' id='email' placeholder='Email Address' required />
                        </div>
                        <div className='form-group'>
                            <input type="password" name='password' id='password' placeholder='Password' required />
                        </div>
                        <div className='form-group'>
                            <input type="password" name='confirmpassword' id='confirmpassword' placeholder='Confirm Password' required />
                        </div>
                        {errorMessage && (
                            <div className='error-message text-danger mb-1'>
                                {errorMessage}
                            </div>
                        )}
                        <div className='form-group'>
                            <button type='submit' className='d-block lab-btn'>
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </form>
                    <div className='account-button'>
                        <span className='d-block cate pt-10'>
                            Have an Account? <Link to="/login">Login</Link>
                        </span>
                        <span className='or'>
                            <span>OR</span>
                        </span>
                        <h5 className='subtitle'>{socialTitle}</h5>
                        <ul className='lab-ul social-icons justify-content-center'>
                            <li>
                                <button className='github' onClick={handleRegister}>
                                    <i className='icofont-github'></i>
                                </button>
                            </li>
                            <li>
                                <a href="/" className='facebook'>
                                    <i className='icofont-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" className='twitter'>
                                    <i className='icofont-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" className='linkedin'>
                                    <i className='icofont-linkedin'></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" className='instagram'>
                                    <i className='icofont-instagram'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
