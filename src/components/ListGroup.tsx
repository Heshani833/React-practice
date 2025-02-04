import React from "react";

const ListGroup = () => {
  const items: String[] = [
    "Colombo",
    "Kandy",
    "Galle",
    "Mathara",
    "Kurunagala",
  ];
  const foods: String[] = ["Noodles", "Rice", "Milkrice", "Cake", "Icecream"];
  return (
    <>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>Items are not found</p>
        ) : (
          <p>Items are found</p>
        )}
        {foods.length === 0 && <p>Item are not found</p>}
        {items.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item}
            </li>
          );
        })}

        {foods.map((foods, index) => {
          return (
            <li key={index} className="list-group-item">
              {foods}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
