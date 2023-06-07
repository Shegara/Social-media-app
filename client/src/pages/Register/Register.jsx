import './register.css'
import { useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const username = useRef()
  const email = useRef();
  const password = useRef()
  const passwordRepeat = useRef();
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    if(passwordRepeat.current.value !== password.current.value) {
        passwordRepeat.current.setCustomValidity("Passwords do not match!")
    } else {
        const user = {
            username:username.current.value,
            email:email.current.value,
            password:password.current.value
        }
        try {
            const res = await axios.post("http://localhost:8800/api/auth/register", user)
            navigate("/login")
        } catch(err){
            console.log(err)
        }
    
    }
  }
  const handleChange = () => navigate("/login")
  return (
    <div className="login">
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="login-logo">ShegoSocial</h3>
                <span className="login-description">
                    Connect with your friends through Shegosocial
                </span>
            </div>
            <form className="login-right" onSubmit={handleClick}>
                <div className="login-box">
                    <input 
                        placeholder="Username" 
                        required ref={username} 
                        className="login-input" 
                    />
                    <input 
                        placeholder="Email" 
                        required ref={email} 
                        className="login-input"
                        type="email" 
                    />
                    <input 
                        placeholder="Password" 
                        required ref={password} 
                        className="login-input" 
                        type="password"
                        minLength="6"
                    />
                    <input 
                        placeholder="Password repeat" 
                        required ref={passwordRepeat} 
                        className="login-input"
                        type="password" 
                    />
                    <button className='login-button' type="submit">Sign up</button>
                    <button className="login-register" onClick={handleChange}>
                        Log in instead 
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
