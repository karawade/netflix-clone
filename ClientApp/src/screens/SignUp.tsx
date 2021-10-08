import React from 'react';
import './SignUp.scss';

const SignUp = () => {
    const register = (e: any) => {
        e.preventDefault();
    }

    const signIn = (e: any) => {
        e.preventDefault();
    }

    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="text-muted">New to Netflix? </span>
                    <span className="signup_link" onClick={register}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
};

export default SignUp;
