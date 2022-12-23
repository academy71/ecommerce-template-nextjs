import React from "react";
import { H4, MdPara } from "../../../styles/ShareStyles";
import StyledProductInfo from "./StyledProductInfo";

const ProductInfo = () => {
  return (
    <StyledProductInfo>
      <H4 className="product__info__title">
        Best Day Bouquet & Lovepop® Birthday Pop-Up Card
      </H4>
      <MdPara className="product__info__description">
        Make this birthday their best one yet with a gift set that brings the
        celebration to them. Paired with our Best Day Bouquet – one of our
        best–selling arrangements designed and delivered by a local florist – is
        a Happy Birthday pop–up card from LovePop.
      </MdPara>
      <H4 className="product__info__title">Please Note</H4>
      <MdPara className="product__info__description">
        Make this birthday their best one yet with a gift set that brings the
        celebration to them. Paired with our Best Day Bouquet – one of our
        best–selling arrangements designed and delivered by a local florist – is
        a Happy Birthday pop–up card from LovePop.
      </MdPara>
      <H4 className="product__info__title">Details</H4>
      <MdPara className="product__info__description">
        Make this birthday their best one yet with a gift set that brings the
        celebration to them. Paired with our Best Day Bouquet – one of our
        best–selling arrangements designed and delivered by a local florist – is
        a Happy Birthday pop–up card from LovePop.
      </MdPara>
      <H4 className="product__info__title">Details</H4>

      <ul className="Details__list">
        <li className="Details__list__item">
          The Deluxe Bouquet is approximately 15"H x 16"W.
        </li>
        <li className="Details__list__item">
          Includes a Lovepop® Happy Birthday Pop–Up Card.
        </li>
        <li className="Details__list__item">
          Designed by florists, ready to display.
        </li>
        <li className="Details__list__item">
          For long–lasting blooms, replace the water daily. We suggest trimming
          the stems every couple days.
        </li>
        <li className="Details__list__item">
          Pet Safety Precautions: This bouquet or plant may include flowers and
          foliage that are known to be toxic to pets. To keep them safe, be sure
          to keep this arrangement out of your pet's reach.
        </li>
      </ul>
      <H4 className="product__info__title">Bloom Details</H4>
      <ul className="Details__list">
        <li className="Details__list__item">Lily</li>
        <li className="Details__list__item">Rose</li>
        <li className="Details__list__item">Sunflower</li>
      </ul>
    </StyledProductInfo>
  );
};

export default ProductInfo;
