import React from "react";
import StyledProductSection from "./StyledProductSection";
import Container from "./../../../Components/Container/Container";
import {H2} from "../../../styles/ShareStyles";
import Button from "../../../Components/Button/Button";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import DATA from "../../../Data/Data";

const ProductSection = () => {
  return (
    <StyledProductSection>
      <Container>
        
        <div className="header">
          <H2 className="header__title">Shop Best Flowers & Gifts For You</H2>

          <div className="header__btn">
            <Button href="/all_products" text="Browse More" variant="transparent" />
          </div>

        </div>

        <div className="cards">
          {DATA.product.home.map((props, i) => {
            return <ProductCard key={i} props={props} />;
          })}
        </div>

      </Container>
    </StyledProductSection>
  );
};

export default ProductSection;
