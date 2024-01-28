import React from "react";

const PartList = (props) => {
  return props.result.map((part, i) => {
    return (
      <div key={i} className="part">
        <div>
          <span className="part__title">MAKE: </span>
          {part.make}
        </div>
        <div>
          <span className="part__title">MODEL: </span>
          {part.model}
        </div>
        <div>
          <span className="part__title">YEAR: </span>
          {part.year}
        </div>
        <div>
          <span className="part__title">OEM: </span>
          {part.OEM}
        </div>
        <div>{part.pic ? <img src={part.pic} alt={part.model} /> : null}</div>
        {part.price ? (
          <div>
            <span className="part__title">PRICE: </span>${part.price}
          </div>
        ) : null}
      </div>
    );
  });
};

export default PartList;
