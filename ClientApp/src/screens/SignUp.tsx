import React, { useRef } from 'react';
import './SignUp.scss';

type User = {
    email: string;
    password: string;
}

const SignUp = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const register = (e: any) => {
        e.preventDefault();
        if (emailRef.current === null) return;
        if (passwordRef.current === null) return;

        const user: User = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        fetch('api/User', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then((res) => {
                console.log(res);
            })
            .catch(error => console.error('Unable to add user', error));
    }

    const signIn = (e: any) => {
        e.preventDefault();
        if (emailRef.current === null) return;
        if (passwordRef.current === null) return;

        const user: User = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        fetch('api/UU', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then((res) => {
                console.log(res);
            })
            .catch(error => console.error('Unable to singin', error));
    }

    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email Address" ref={emailRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
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
