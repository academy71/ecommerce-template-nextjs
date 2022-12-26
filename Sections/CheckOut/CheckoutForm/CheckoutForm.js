import React from "react";
import StyledCheckoutForm from "./StyledCheckoutForm";
import { H5, LgPara, MdPara } from "./../../../styles/ShareStyles";

const option = {
  Residence: [
    {
      name: "Residence",
    },
    {
      name: "Residence",
    },
    {
      name: "Residence",
    },
  ],
  country: [
    {
      name: "Bangladesh",
    },
    {
      name: "India",
    },
    {
      name: "Pakistan",
    },
  ],
};

const CheckoutForm = () => {
  return (
    <StyledCheckoutForm>
      <div className="billing__details">
        <H5 className="checkout__form__title">Billing details</H5>
        <div className="input__group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            className="input"
          />
        </div>
        {/* Deliver to */}
        <div className="input__group">
          <LgPara className="checkout__form__sub__title">Deliver to</LgPara>

          <select>
            {option.Residence.map(({ name }) => {
              return <option>{name}</option>;
            })}
          </select>
        </div>
        {/* Country */}
        <div className="input__group">
          <LgPara className="checkout__form__sub__title">Country</LgPara>
          <div className="custom__select">
            <select>
              {option.country.map(({ name }) => {
                return <option>{name}</option>;
              })}
            </select>
          </div>
          <div className="full__name">
            <input
              type="text"
              id="fName"
              name="fName"
              placeholder="Your first name"
              className="input"
            />
            <input
              type="text"
              id="lName"
              name="lName"
              placeholder="Your last name"
              className="input"
            />
          </div>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Your address"
            className="input"
          />
          <div className="city__zipcode">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="input"
            />

            <select>
              {option.country.map(({ name }) => {
                return <option>{name}</option>;
              })}
            </select>

            <input
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="Zip code"
              className="input"
            />
          </div>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Your phone number"
            className="input"
          />
          <MdPara className="optional__text">
            Order note
            <span>(optional)</span>
          </MdPara>
          <textarea
            className="input"
            placeholder="Tell us what do you think"
            id="text"
            name="text"
          />
        </div>
      </div>

      {/* Card Information */}
      <div className="card__information">
        <H5 className="card__information__title">Card Information</H5>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          className="input"
          placeholder="Card number"
        />
        <div className="full__name">
          <input
            type="text"
            id="cardFname"
            name="cardFname"
            className="input"
            placeholder="First Name"
          />
          <input
            type="text"
            id="cardFname"
            name="cardFname"
            className="input"
            placeholder="Last Name"
          />
        </div>
        <div className="full__name">
          <input
            type="text"
            id="date"
            name="date"
            className="input"
            placeholder="Expiration Date"
          />
          <input
            type="text"
            id="secutityCode"
            name="secutityCode"
            className="input"
            placeholder="Security Code"
          />
        </div>
        <LgPara className="or">OR</LgPara>
      </div>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
