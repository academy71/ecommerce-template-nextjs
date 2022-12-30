import React, { useState } from "react";
import { SmPara, MdPara } from "../../styles/ShareStyles";
import StyledCard from "./StyledCard";
import Image from "next/image";
import img from "./../../Images/card.png";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMinus } from "react-icons/hi";

const Card = ({ varient }) => {
  const [number, setNumber] = useState(1);

  return (
    <StyledCard>
      <div className="card__header">
        <SmPara className="card__item">Item 1</SmPara>
        <div className="card__header__btn">
          <Link href="#" className="card__btn">
            Edit
          </Link>
          <Link href="#" className="card__btn">
            Remove
          </Link>
        </div>
      </div>
      <div className="card__body">
        <Image
          src={img}
          className="card__img"
          alt=""
          width="auto"
          height="auto"
        />
        <div className="card__content">
          <MdPara className="card__title">
            Best Day Bouquet & Lovepop® Birthday Pop-Up Card Flower
          </MdPara>
          <MdPara className="card__id">Cart ID: 12345678910</MdPara>
          <MdPara className="price">$82</MdPara>
          <div className="quantity">
            <button
              type="button"
              className="common btn"
              onClick={() => setNumber((prev) => prev - 1)}
              disabled={number === 1 ? true : false}
            >
              <HiMinus />
            </button>
            <input
              type="text"
              readOnly
              value={number}
              className="input-text common"
            />
            <button
              type="button"
              className="common btn"
              onClick={() => setNumber((prev) => prev + 1)}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
