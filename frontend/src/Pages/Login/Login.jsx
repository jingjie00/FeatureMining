import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import Logo from '../../Images/logo.png';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleFacebookSignIN, signInWithGithub } = useAuth();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const singnInWithGoogleHeander = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            // setUser(result.user);
            console.log(result.user);
            navigate('/approved')
        })
        .catch(error => {
            // setError(error.message);
            console.log(error)
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(resutlt => {
            const user = {email: email, password: password}
            console.log(user);
        })
        navigate("/approved");
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    return (
        <>
            <section className="h-100 gradient-form pb-5">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="md:row flex justify-center">
                                    <div className="">
                                        <div className=" p-md-5 ">
                                            <div className="text-center flex-col align-center justify-center items-center">
                                            <img  src={Logo} alt="Logo" style={{ width: '350px', height: '300px' }}/>
                                        

                                             
                                           
                                                <h2 className="mt-1 mb-5 pb-1">We are The inShield Team</h2>
                                            </div>
                                            <p className="d-flex justify-content-start">Please login to your account</p>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input onBlur={handleEmailChange} type="email" id="form2Example11" className="form-control"
                                                        placeholder="Email Address" required />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input onBlur={handlePasswordChange} type="password" id="form2Example22" placeholder="Password" className="form-control" required />
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="theme-btn btn-fill" type="submit">Log
                                                        in</button>
                                                    <a className="text-muted text-decoration-none" href="#!">Forgot password?</a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger">Create new</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6 d-flex align-items-center text-black">
                                        <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                                        <h1 style={{ fontSize: '40px' }}>Welcome to a Family</h1>
                                <p>Welcome to a Family: Where Your Insurance Journey Begins with Trust, Support, and Community. At our community-driven insurance platform, we're more than just a policy provider – we're your trusted partners on the path to secure and meaningful protection. Our dedicated team tailors insurance coverage to your unique needs while fostering a sense of community and trust. Discover insurance that's more than just a policy – it's a promise of security, support, and genuine care.</p>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="row my-5">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <h4>or sign up with:</h4>
                                            <div className="doctors-social">
                                                <button className="loginbtn" onClick={singnInWithGoogleHeander}><FontAwesomeIcon icon={faGoogle} /></button>
                                                <button className="loginbtn" onClick={signInWithGithub}><FontAwesomeIcon icon={faGithub} /></button>
                                                <button className="loginbtn" onClick={handleFacebookSignIN}><FontAwesomeIcon icon={faFacebook} /></button>
                                                <button className="loginbtn"><FontAwesomeIcon icon={faTwitter} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;