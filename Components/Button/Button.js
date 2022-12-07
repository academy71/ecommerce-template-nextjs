import Link from "next/link";
import React from "react";
import StyledButton from "./StyledButton";

const Button = ({href = "", text, variant}) => {
  return (
    <StyledButton>
      {href ? (
        <Link className={`btn ${variant}`} href={href}>
          {text}
        </Link>
      ) : (
        <button className={`btn ${variant}`}>{text}</button>
      )}
    </StyledButton>
  );
};

export default Button;
