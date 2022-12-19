import { useEffect, useRef, useState } from "react";
import styles from "./inputStyle.module.css";

const Input = () => {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
    welcome: "",
  });
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName({
      firstName: "",
      lastName: "",
      welcome: `Welcome ${fullName.firstName}`,
    });
  };

  const changeHandler = (e) => {
    setFullName({ ...fullName, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className={styles.enrolForm} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="f">First Name:</label>
        <input
          id="f"
          type="text"
          name="firstName"
          onChange={changeHandler}
          value={fullName.firstName}
          ref={inputRef}
        />
        <br />
        <label htmlFor="l">Last Name:</label>
        <input
          id="l"
          type="text"
          name="lastName"
          onChange={changeHandler}
          value={fullName.lastName}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
        <label>{fullName.welcome}</label>
        {/* {<div>{welcome ? <p>{welcome}</p> : null}</div>} */}
      </form>
    </div>
  );
};

export default Input;
