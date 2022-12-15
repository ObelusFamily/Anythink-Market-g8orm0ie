import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const onSearchChange = (e) => {
    props.onSearchFilter(
      e.target.value,
      (page) => agent.Items.byTitle(e.target.value, page),
      agent.Items.byTitle(e.target.value)
    );
  };
  const [searchVisible, setSearchVisible] = useState(false);
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span
            id="get-part"
            onClick={() => {
              setSearchVisible(true);
            }}
          >
            get
          </span>
          {searchVisible && (
            <input
              className="field"
              style={{ margin: "10px" }}
              placeholder="What is it that you truly desire?"
              id="search-box"
              onChange={onSearchChange}
            />
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
