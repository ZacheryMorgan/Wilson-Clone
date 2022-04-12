import React from "react";
import "../styles/Card.scss";

const Card = ({ data, onChange, cart }) => {
  return (
    <div className="card-wrapper  shadow-md shadow-black rounded-sm">
      <div className="img-wrapper relative overflow-hidden">
        <img
          className="w-72 rounded-sm hover:scale-125"
          src={data.img}
          alt=""
          loading="lazy"
        />
        <p className="name absolute bottom-0 bg-white px-3 py-1 rounded-sm -translate-x-1/2 left-1/2 font-bold">
          {data.name}
        </p>
      </div>
      <section
        className="price-wrapper
         flex justify-between items-center px-7 h-12"
      >
        <p className="price font-bold">${data.price}</p>
        <input
          className="w-14"
          type="number"
          name=""
          id=""
          placeholder="0"
          value={data.quantity}
          min="0"
          onChange={(e) => onChange(e, data.name)}
        />
      </section>
    </div>
  );
};

export default Card;

// hover:scale-110
