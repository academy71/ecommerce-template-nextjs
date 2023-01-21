import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import StyledAllProductsSection from "./StyledAllProductsSection";
import FilterMobileIcon from "./../../Components/icons/FilterMobileIcon";
import {LgPara} from "../../styles/ShareStyles";
import DownArrow from "./../../Components/icons/DownArrow";
import DATA from "../../Data/Data";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Filter from "./Filter/Filter";
import Button from "../../Components/Button/Button";

const AllProductsSection = () => {
  const [filter, setFilter] = useState(false);

  const FilterOpenClick = () => {
    setFilter((filter) => !filter);
  };
  return (
    <StyledAllProductsSection>
      <Container>
        
        <div className="header">

          <div className="header__left">

            <div className="header__left__icon" onClick={FilterOpenClick}>
              <FilterMobileIcon />
            </div>

            <LgPara className="header__left__desc">
              Showing 48 of 264 "Birthday Flowers" items
            </LgPara>

          </div>

          <div className="header__right">

            <LgPara className="header__right__desc">Sort By:</LgPara>

            <form action="#" className="header__form">

              <select className="header__form__select">
                <option>Best Selling</option>
                <option>Lowest Price</option>
                <option>Highest Price</option>
              </select>

              <span className="header__form__down__arrow">
                {" "}
                <DownArrow />
              </span>

            </form>
          </div>

        </div>

        <div className="inner__content">
          <div
            className={
              filter
                ? "inner__content__filter inner__content__open__filter "
                : "inner__content__filter inner__content__close__filter"
            }
          >
            <Filter FilterOpenClick={FilterOpenClick} />
          </div>

          <div className="inner__content__products">

            <div className="inner__content__cards">
              {DATA.all_product.product_page.map((props, i) => {
                return <ProductCard key={i} props={props} />;
              })}
            </div>

            <div className="inner__content__products__btn">
              <Button text="Load More" variant="primary" />
            </div>

          </div>
          
        </div>
      </Container>
    </StyledAllProductsSection>
  );
};

export default AllProductsSection;
