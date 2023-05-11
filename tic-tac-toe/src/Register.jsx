import { useRef, useState, useEffect } from "react";
import { faCheck, faTimeline, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ref } from "react";

/* Must start with letter, be followed by 4-20 of: {letter, digit, hyphen, underscore} */
const USER_REGEX = /^[A-z][A-z0-9-_]{3,20}$/;
/* Must contain uppercase, lowercase, digit, and special symbol, and be between 8-50 chars */
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,50}$/;

const Register = () => {
    /* useRef is similar to state (persists between renders) but change in ref does not cause re-rendering */
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('')
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []) /* This code runs once, upon loading page */

    useEffect(() => {
        /* Test whether username meets given regex reqs and update validName accordingly */
        const result = USER_REGEX.test(user);
        setValidName(result);
        console.log(result);
        console.log(user);
    }, [user]) /* This code is run anytime the user changes */

    useEffect(() => {
        /* Check whether given password meets given regex reqs, update validPassword accordingly */
        const result = PWD_REGEX.test(password);
        setValidPassword(result);
        console.log(result);
        console.log(password);
        /* Check if password and verify-password match, update accordingly */
        const match = (password === matchPassword);
        setValidMatch(match);
    }), [password, matchPassword] /* This code is run anytime password or verify-password are changed */

    useEffect(() => {
        setErrMsg('');
    }, [user, password, matchPassword]) /* Clear the Error Msg any time the user makes any change */

  return (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "hide"}>{errMsg}</p>
        <h1>Register</h1>
        <form>
            <label htmlFor="username">
                Username:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={(validName || !user) ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input type="text"
             id="username"
             ref={userRef}
             autoComplete="off"
             onChange={(event) => setUser(event.target.value)}
             required
             aria-describedby="uidnote"
             onFocus={() => setUserFocus(true)}
             onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={(userFocus && user && !validName) ? "instructions" : "hide"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must be between 4-20 characters.<br />
                Must begin with a letter.<br />
                Must consist only of letters, numbers, underscores, and hyphens.
            </p>
        </form>
    </section>
  )
}

export default Register;
