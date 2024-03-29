import React from 'react';
import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width="400"
          height="400"
          alt="50 California St."
        />
      </Link>
      <h1 className="POPOSSpace-title">
        <Link to={`/details/${id}`}>{name}</Link>
      </h1>
      <div className="POPOSSpace-info">
        <div>{address}</div>
        <div>{hours}</div>
      </div>
    </div>
  );
}

export default POPOSSpace;