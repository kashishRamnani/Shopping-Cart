import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const title = "Login";
const btnText = "Login Now"
const socailTitle = "Login With Socail Media"
const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]

const Login = () => {
    const [errorMessage,setErrorMessgae] = useState("");
    const{signUpWithGmail,login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state ?. from?.pathname || "/";
    const handleLogin = (event) =>{
      event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
     login(email,password).then((result)=>{
      const user = result.user;
      alert("Login Sucessfull")
      navigate(form,{replace:true})
     }).catch((error)=>{
      const errorMsg = error.message;
      setErrorMessgae("Please valid email and password!")
     })

    }
    const handleaRegister=(e)=>{
     signUpWithGmail().then((result)=>{
      const user = result.user;
      navigate(form,{replace:true})
     }).catch((error)=>{
      const errorMsg = error.message;
      setErrorMessgae("Please valid email and password!")
    })
  }
  return (
    <div className='login-section padding-tb section-bg'>
      <div className='container'>
        <div className='account-wrapper'>
          <h3 className='title'>{title}</h3>
          <form className='account-form' onSubmit={handleLogin}>
            <div className='form-group'>
              <input type="email" name='email' id='email' placeholder='Email Address' required />

            </div>
            <div className='form-group'>
              <input type="password" name='password' id='password' placeholder='Password' required />

            </div>
            <div>
              {
                errorMessage &&(
                  <div className='error-message text-danger mb-1'>
                    {errorMessage}
                    </div>
                )
              }
            </div>
            <div className='form-group'>
            <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
              <div className='checkgroup'>
                 <input type="checkbox" name='remember' id='remember' />
                 <label htmlFor="remember">Remembar Me</label>
              </div>
              <Link>Forget Password</Link>
            </div>
            </div>
            <div className='form-group'>
               <button type='submit' className='d-block lab-btn'>
                        <span>{btnText}</span>
               </button>
            </div>
          </form>
           {/*account button */}
           <div className='accoubt-button'>
            <span className='d-block cate pt-10'>
              Do not Have an Acoount ? <Link to="/sing-up">Sign-up</Link>
            </span>
            <span className='or'>
              <span>OR</span>
            </span>
            {/*socail Media */}
            <h5 className='subtitle'>{socailTitle}</h5>
            <ul className='lab-ul social-icons justify-content-center'>
              <li>
                <button className='github' onClick={handleaRegister}><i className='icofont-github'></i></button>
              </li>
              <li>
                <a  href="/" className='facebook'><i className='icofont-facebook'></i></a>
              </li>
              <li>
                <a  href="/" className='twitter'><i className='icofont-twitter'></i></a>
              </li>
              <li>
                <a  href="/" className='linkedin'><i className='icofont-linkedin'></i></a>
              </li>
              <li>
                <a  href="/" className='instagram'><i className='icofont-instagram'></i></a>
              </li>
              
            </ul>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Login