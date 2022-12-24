import React from "react";
import StyledContactSection from "./StyledContactSection";
import Container from "./../../Components/Container/Container";
import {H1, H5, LgPara, MdPara} from "../../styles/ShareStyles";
import Image from "next/image";
import img from "../../Images/contact/Images.png";
import Link from "next/link";
import Button from "./../../Components/Button/Button";

const ContactSection = () => {
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

          <form className="contact__form">
            
            <div className="contact__form__item">
              <LgPara className="contact__form__label">Your Name</LgPara>
              <input
                type="text"
                placeholder="e.g Ben Stokes"
                className="contact__form__input"
              />
            </div>

            <div className="contact__form__item">
              <LgPara className="contact__form__label">Email address</LgPara>
              <input
                type="email"
                placeholder="e.g hello@gmail.com"
                className="contact__form__input"
              />
            </div>

            <div className="contact__form__item">
              <LgPara className="contact__form__label">Phone Number</LgPara>
              <input
                type="number"
                placeholder="inc. country code"
                className="contact__form__input"
              />
            </div>

            <div className="contact__form__item">
              <LgPara className="contact__form__label">Message</LgPara>
              <textarea
                cols="30"
                rows="10"
                placeholder="inc. country code"
                className="contact__form__input contact__form__textarea"
              ></textarea>
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
