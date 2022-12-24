import React from "react";
import StyledProductDetails from "./StyleProductDetails";
import Container from "./../../Components/Container/Container";
import { H4, H5, MdPara } from "./../../styles/ShareStyles";
import Button from "../../Components/Button/Button";
import ProductInfo from "./ProductInfo/ProductInfo";
import Slider from "./Slider/ProductSlider";

const ProductDetails = () => {
  return (
    <StyledProductDetails>
      <Container>
        <div className="row">
          {/* Product Images Slider */}
          <div className="product__slider">
            <Slider />
          </div>

          {/* Product Details */}
          <div className="product__details">
            <MdPara className="product__details__sub__title">
              FLORIST-TO-DOOR
            </MdPara>
            <H4 className="product__details__title">
              Best Day Bouquet & Lovepop® Birthday Pop-Up Card Flower
            </H4>
            <H5 className="product__details__price">$82</H5>
            <form action="">
              <div className="quality">
                <input
                  type="radio"
                  name="radio"
                  className="radio"
                  id="standard"
                />
                <label htmlFor="standard">
                  <span>Standard</span>
                  <span>$82</span>
                </label>
              </div>
              <div className="quality">
                <input
                  type="radio"
                  name="radio"
                  className="radio"
                  id="deluxe"
                />
                <label htmlFor="deluxe">
                  <span>Deluxe</span>
                  <span>$96</span>
                </label>
              </div>
              <div className="quality">
                <input
                  type="radio"
                  name="radio"
                  className="radio"
                  id="premium"
                />
                <label htmlFor="premium">
                  <span>Premium</span>
                  <span>$108</span>
                </label>
              </div>
              <div className="input__group">
                <input
                  type="text"
                  className="input zip__code"
                  placeholder="Delivery ZIP Code"
                />
                <input type="date" className="input date" />
              </div>
              <Button text="Ad to Cart" variant="primary" />
            </form>
          </div>
        </div>
        <ProductInfo />
      </Container>
    </StyledProductDetails>
  );
};

export default ProductDetails;
