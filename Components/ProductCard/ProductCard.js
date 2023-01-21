import React from "react";
import StyledProductCard from "./StyledProductCard";
import Button from "./../Button/Button";
import {H5, SmPara} from "../../styles/ShareStyles";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({props}) => {
 const {img, link, bSeller, title, price, desc, btnLink, btnText}= props
  return (
    <StyledProductCard>
      <div className="thumbnail">
        <Image
          src={img}
          alt="cart img"
          className="thumbnail__img"
          height="auto"
          width="auto"
        />
        {bSeller && <span className="thumbnail__seller">{bSeller}</span>}
        <Link href={link} className="thumbnail__link"></Link>
      </div>
      <div className="text">
        <H5 className="text__title">{title}</H5>
        <span className="text__price">{price}</span>
        <SmPara className="text__desc">{desc}</SmPara>
      </div>
      <Button
        href={btnLink}
        text={btnText}
        variant="transparent"
        className="btn"
      />
    </StyledProductCard>
  );
};

export default ProductCard;
