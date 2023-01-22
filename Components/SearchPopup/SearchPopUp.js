import Image from "next/image";
import React, { useState } from "react";
import StyledSearchPopup from "./StyledSearchPopup";
import CloseImg from "./../../Images/CloseIcon.svg";
import searchIcon from "./../../Images/search.svg";

const searchData = {
  popularSearch: [
    {
      id: 1,
      name: "Birthday",
    },
    {
      id: 2,
      name: "Get Well",
    },
    {
      id: 3,
      name: "Congrats",
    },
    {
      id: 4,
      name: "Wedding",
    },
  ],
  flowerType: [
    { id: 1, name: "Summer" },
    { id: 2, name: "Winter" },
    { id: 3, name: "Spring" },
  ],
  flowerColor: [
    { id: 1, name: "red", color: "" },
    { id: 5, name: "blue", color: "" },
    { id: 2, name: "yellow", color: "" },
    { id: 6, name: "pink", color: "" },
    { id: 3, name: "purple", color: "" },
    { id: 7, name: "green", color: "" },
    { id: 4, name: "orange", color: "" },
    { id: 8, name: "white", color: "" },
  ],
};

const SearchPopUp = ({ isSearchOpen, setIsSearchOpen }) => {
  const [search, setSearch] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledSearchPopup className={isSearchOpen ? "open__search" : ""}>
      <div className="search__input__container">
        <div className="input__group">
          <input
            type="text"
            name="search"
            placeholder="Search by color, flower, occasion"
            className="search__input"
            onChange={handleSearch}
          />
          <Image
            className="search__icon"
            src={searchIcon}
            alt="Search Icon"
            priority={true}
          />
        </div>
        <Image
          onClick={() => setIsSearchOpen(false)}
          src={CloseImg}
          alt="close Icon"
          priority={true}
        />
      </div>
      {search ? (
        <p>{search} not found !</p>
      ) : (
        <div className="search__content">
          <div className="popular__search">
            <h5 className="search__heading">Popular Search</h5>

            <ul className="search__key__word">
              {searchData.popularSearch.map(({ id, name }) => {
                return (
                  <li className="search__key__word__text" key={id}>
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flower__type">
            <h5 className="search__heading">Flower Type</h5>

            <ul className="search__key__word">
              {searchData.flowerType.map(({ id, name }) => {
                return (
                  <li className="search__key__word__text" key={id}>
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flower__color">
            <h5 className="search__heading">Flower Color</h5>
            <ul className="search__key__word">
              {searchData.flowerColor.map(({ id, name }) => {
                return (
                  <li className="search__key__word__text" key={id}>
                    <span className={name}></span> {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </StyledSearchPopup>
  );
};

export default SearchPopUp;
