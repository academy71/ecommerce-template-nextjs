import React, {useRef, useState} from "react";
import StyledContactSection from "./StyledContactSection";
import Container from "./../../Components/Container/Container";
import {H1, H5, LgPara, MdPara} from "../../styles/ShareStyles";
import Image from "next/image";
import img from "../../Images/contact/Images.png";
import Link from "next/link";
import Button from "./../../Components/Button/Button";

const ContactSection = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const formReset = () => {
    setUser({name: "", email: "", password: "", number: "", message: ""});
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formReset();
    setErrors({});

    let newErrors = false;

    if (!user.name) {
      newErrors = true;
      setErrors((prevErrors) => ({...prevErrors, name: "Name is required"}));
    }

    if (!user.email) {
      newErrors = true;
      setErrors((prevErrors) => ({...prevErrors, email: "Email is required"}));
    }

    if (!user.number) {
      newErrors = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        number: "Number is required",
      }));
    }

    if (!user.password) {
      newErrors = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    }

    if (!user.message) {
      newErrors = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
    }

    if (!newErrors) {
      console.log(user);
    }
  };
  
  return (
    <StyledContactSection>
      <Container>
        <div className="inner">
          <div className="contact__address">
            <div className="contact__address__heading">
              <H1 className="contact__address__header">
                Every minute{" "}
                <span className="contact__address__header__style">
                  {" "}
                  counts for you.
                </span>
              </H1>

              <div className="contact__address__text">
                <H5 className="contact__address__title">Write to Us:</H5>
                <MdPara className="contact__address__desc">
                  youremail@gmail.com
                </MdPara>
              </div>

              <div className="contact__address__text">
                <H5 className="contact__address__title">Call Us:</H5>
                <MdPara className="contact__address__desc">
                  (000) 012 345 678
                </MdPara>
              </div>

              <div className="contact__address__text">
                <H5 className="contact__address__title">Business Hours:</H5>
                <MdPara className="contact__address__desc">
                  11:00 am – 5:00 pm IST (Monday to Saturday)
                </MdPara>
              </div>
            </div>

            <div className="contact__address__thumbnail">
              <Image
                src={img}
                alt="flower"
                className="contact__address__thumbnail__img"
              />
            </div>
          </div>

          <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact__form__item">
              <LgPara className="contact__form__label">Your Name</LgPara>
              <input
                type="text"
                placeholder="e.g Ben Stokes"
                className="contact__form__input"
                value={user.name}
                name="name"
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div className="contact__form__item">
              <LgPara className="contact__form__label">Email address</LgPara>
              <input
                type="email"
                placeholder="e.g hello@gmail.com"
                className="contact__form__input"
                value={user.email}
                name="email"
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="contact__form__item">
              <LgPara className="contact__form__label">Phone Number</LgPara>
              <input
                type="number"
                placeholder="inc. country code"
                className="contact__form__input"
                value={user.number}
                name="number"
                onChange={handleChange}
              />
              {errors.number && <span>{errors.number}</span>}
            </div>

            <div className="contact__form__item">
              <LgPara className="contact__form__label">Message</LgPara>
              <textarea
                cols="30"
                rows="10"
                placeholder="inc. country code"
                className="contact__form__input contact__form__textarea"
                value={user.message}
                name="message"
                onChange={handleChange}
              ></textarea>
              {errors.message && <span>{errors.message}</span>}
            </div>

            <MdPara className="contact__form__condition">
              By submitting this form, you agree to the{" "}
              <Link href="/" className="contact__form__condition__link">
                Terms and Conditions
              </Link>
            </MdPara>

            <Button text="Send Message" variant="primary" />
          </form>
        </div>
      </Container>
    </StyledContactSection>
  );
};

export default ContactSection;
