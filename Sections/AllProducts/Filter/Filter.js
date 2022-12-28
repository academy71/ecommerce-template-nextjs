import React from "react";
import StyledFilter from "./StyledFilter";
import ZipCode from "./../zipCode/ZipCode";
// import ZipCodeResult from '../ZipCodeResult/ZipCodeResult';
import Checkbox from "./../Checkbox/Checkbox";
import {H5} from "../../../styles/ShareStyles";
import DATA from "../../../Data/Data";
import TopArrow from "../../../Components/icons/topArrow";
import CloseIcon from './../../../Components/icons/CloseIcon';

const Filter = ({FilterOpenClick}) => {
  return (
    <StyledFilter>

      <ZipCode />

      <div className="close__icon" onClick={FilterOpenClick}>
        <CloseIcon  />
      </div>

      {/* <ZipCodeResult /> */}

      <div className="price filter__box">
        
        <div className="filter__box__header">
          <H5 className="filter__box__title">Price Range</H5>
          <TopArrow />
        </div>

        <div className="checkboxes">
          {DATA.checkbox_title.price.map(({title, id}) => {
            return <Checkbox key={id} title={title} />;
          })}
        </div>

      </div>

      <div className="occasion filter__box">

        <div className="filter__box__header">
          <H5 className="filter__box__title">Occasion</H5>
          <TopArrow />
        </div>

        <div className="checkboxes">
          {DATA.checkbox_title.occasion.map(({title, id}) => {
            return <Checkbox key={id} title={title} />;
          })}
        </div>

      </div>

      <div className="flower__type filter__box">

        <div className="filter__box__header">
          <H5 className="filter__box__title">Flower Type</H5>
          <TopArrow />
        </div>

        <div className="checkboxes">
          {DATA.checkbox_title.flower_type.map(({title, id}) => {
            return <Checkbox key={id} title={title} />;
          })}
        </div>
      </div>

      <div className="color filter__box">

        <div className="filter__box__header">
          <H5 className="filter__box__title">Color</H5>
          <TopArrow />
        </div>

        <div className="checkboxes">
          {DATA.checkbox_title.color.map(({title, id}) => {
            return <Checkbox key={id} title={title} />;
          })}
        </div>

      </div>

      <div className="filter__btn">
        <button className="filter__btn__button">Reset Filters</button>
      </div>

    </StyledFilter>
  );
};

export default Filter;
