import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

//withRouter transforms an already existing component
//so that child component will be able to recieve the location  history and match props of route
//from the parent component; which in this case is the Homepage component
const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
