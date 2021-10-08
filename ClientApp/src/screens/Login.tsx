import React, { useState } from 'react';
import './Login.scss';
import SignUp from './SignUp';

const Login = () => {
    const [signedIn, setSignedIn] = useState<boolean>(false);
    return (
        <div className="login">
            <div className="login_background">
                <img src="/netflix_logo.png" alt="Netflix" className="login_logo" />
                <button type="button" className="btn btn-reder px-4 pt-0 pb-1 font-weight-bold login_button">Sign In</button>
                <div className="login_gradient"></div>
            </div>
            <div className="login_body">
                {
                    signedIn ?
                        <>
                            <h1>Unlimited movies, TV shows, and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="login_input">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button>Get Sarted {'>'}</button>
                                </form>
                            </div>
                        </> :
                        <SignUp />
                }
            </div>
        </div>
    )
};

export default Login;