import React from "react";

export default function RestaurantCard(props) {
  return (
    <div className="p-10">
      <img
        className="sc-bXCLTC jRHowI h-50 w-70 rounded-3xl"
        src={`${props.imgLink}`}
        alt="Theobroma"
      ></img>
      <h2 className="font-bold">{props.name}</h2>
      <span>{props.rating}</span>
      <span>{props.time}</span>

      {/* {
       {props.cuisines}.map((cuisine)=>(
        <span>{cuisine}</span>
       ))
      } */}
      <p>{props.cuisines}</p>
      <p>{props.locality}</p>
    </div>
  );
}
