import React, {useRef, useState} from "react";
import StyledSignUp from "./StyledSignUp";
import {MdPara} from "../../styles/ShareStyles";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

const SignUp = () => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const formReset = () => {
    setUser({fName: "", lName: "", email: "", password: "", confPassword: ""});
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formReset();
    setErrors({});

    let newErrors = false;

    if (!user.email) {
      newErrors = true;
      setErrors((prevErrors) => ({...prevErrors, email: "Email is required"}));
    }

    if (!user.fName) {
      newErrors = true;
      setErrors((prevErrors) => ({...prevErrors, fName: "Name is required"}));
    }

    if (!user.lName) {
      newErrors = true;
      setErrors((prevErrors) => ({...prevErrors, lName: "Name is required"}));
    }

    if (!user.password) {
      newErrors = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    }
    if (!user.confPassword) {
      newErrors = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Confirm Password is required",
      }));
    }

    if (!newErrors) {
      console.log(user);
    }
  };

  return (
    <StyledSignUp>
      <MdPara className="sign__up__title">
        Fill the below box to get started
      </MdPara>
      <form className="sign__up__form" onSubmit={handleSubmit} ref={formRef}>
        {errors.email && <span>{errors.email}</span>}
        <input
          type="email"
          placeholder="Email"
          className="sign__up__form__input"
          value={user.email}
          name="email"
          onChange={handleChange}
        />

        {errors.fName && <span>{errors.fName}</span>}
        <input
          type="text"
          placeholder="First name"
          className="sign__up__form__input"
          value={user.fName}
          name="fName"
          onChange={handleChange}
        />

        {errors.lName && <span>{errors.lName}</span>}
        <input
          type="text"
          placeholder="Last name"
          className="sign__up__form__input"
          value={user.lName}
          name="lName"
          onChange={handleChange}
        />

        {errors.password && <span>{errors.password}</span>}
        <input
          type="password"
          placeholder="Password"
          className="sign__up__form__input"
          value={user.password}
          name="password"
          onChange={handleChange}
        />

        {errors.password && <span>{errors.password}</span>}
        <input
          type="password"
          placeholder="Password confirmation"
          className="sign__up__form__input"
          value={user.confPassword}
          name="confPassword"
          onChange={handleChange}
        />

        <Checkbox
          className="sign__up__form__checkbox"
          title="agree to the"
          to="/"
          linkText="Terms of Service"
        />
        <Checkbox title="Notify me about new features and special offers" />

        <div className="sign__up__form__btn">
          <Button variant="primary" text="Sign Up" />
        </div>
      </form>
    </StyledSignUp>
  );
};

export default SignUp;
