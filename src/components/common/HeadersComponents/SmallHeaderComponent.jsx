import "./HeadersStyles.scss";
import React from "react";

const SmallHeaderComponent = ({ headerText, faIcon }) => {
  return (
    <h3>
      {faIcon} &nbsp;
      {headerText}
    </h3>
  );
};

export default SmallHeaderComponent;
