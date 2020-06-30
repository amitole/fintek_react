import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
  const { name, imageUrl, job } = props;

  return (
    <div className="avatar">
      <img className="avatar-image" src={imageUrl} alt="Avatar" />
      <h2 className="avatar-name">{name}</h2>
      <p className="avatar-job">{job}</p>
    </div>
  );
};

export default Avatar;
