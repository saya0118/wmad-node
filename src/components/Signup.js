import React, {useRef} from 'react'
import {useAuth} from '../contexts/AuthContext'

const Signup = () => {
    const emailRef = useref()
    const passwordRef = useref()
    const passwordConfirmRef = useref()
    const {signup} = useAuth()
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return MediaStreamError('Password do not match')
        }
        signup(emailRef.current.value, passwordRef.current.value)
    }
    
    return (
        <>
        <div className="card-body">
            <h2>Sign Up</h2>
            <form>
                <div className="form-group" id="email">
                    <label>Email</label>
                    <input type="email" ref={emailRef} required/>
                </div>
                <div className="form-group" id="password">
                    <label>Password</label>
                    <input type="password" ref={passwordRef} required/>
                </div>
                <div className="form-group" id="password-confirm">
                    <label>Password Confirm</label>
                    <input type="password-confirm" ref={passwordConfirmRef} required/>
                </div>
            </form>
        </div>
        </>
    )
}

export default Signup;