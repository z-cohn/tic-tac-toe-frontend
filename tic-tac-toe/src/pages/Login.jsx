import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import { faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
const LOGIN_URL = '/login';

function Login() {
    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                                                JSON.stringify({ email, password }),
                                                {
                                                    headers: { 'Content-Type': 'application/json' },
                                                    withCredentials: true
                                                });
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, password, roles, accessToken });
            setEmail('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No response from server");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing email or password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login failed");
            }
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are now logged in!</h1>
                    <br />
                    <p>
                        <Link to="/protected">View protected route</Link>
                    </p>
                </section>
            ) : (
                 <section>
                     <p ret={errRef} className={errMsg ? "errmsg" : "hide"}>{errMsg}</p>

                     <h1>Sign In</h1>

                     <form onSubmit={handleSubmit}>
                         <label htmlFor="email">Email</label>
                         <input
                             type="email"
                             id="email"
                             ref={emailRef}
                             autoComplete='off'
                             onChange={(event) => setEmail(event.target.value)}
                             value={email}
                             required
                         />

                         <label htmlFor="password">Password</label>
                         <input
                             type="password"
                             id="password"
                             onChange={(event) => setPassword(event.target.value)}
                             value={password}
                             required
                         />

                         <button>Sign In</button>
                    </form>

                         <p>
                             Not yet registered?<br />
                             <span className='line'>
                                 <Link to="/register">Register</Link>
                             </span>
                         </p>
                 </section>
                )
            }
        </>
    )
}

export default Login;