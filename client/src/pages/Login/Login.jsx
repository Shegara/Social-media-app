import './login.css'
import { useContext, useRef } from 'react'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import {CircularProgress}  from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, error, isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

 
  const handleClick = async (e) => {
    e.preventDefault();
    loginCall(
      { 
        email: email.current.value, 
        password: password.current.value 
      }, 
      dispatch
    );
  };
  console.log(user)

  const handleChange = () => navigate("/register")

  return (
    <div className="login">
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="login-logo">ShegoSocial</h3>
                <span className="login-description">
                    Connect with your friends through Shegosocial
                </span>
            </div>
            <div className="login-right">
                <form className="login-box" onSubmit={handleClick}>
                    <input 
                        placeholder="Email" 
                        type="email"
                        className="login-input"
                        ref={email}
                    />
                    <input 
                        placeholder="Password" 
                        type="password"
                        minLength = "6" 
                        className="login-input" 
                        ref={password}
                    />
                    <button className='login-button'>
                      {isFetching ? <CircularProgress color="white" size="20px" disabled={isFetching}/> : "Login" }
                    </button>
                    <span className="login-forgot">Forgot Password?</span>
                    <button className="login-register" onClick={handleChange}>
                      {isFetching ? <CircularProgress color="white" size="20px"/> : "Create a new account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}