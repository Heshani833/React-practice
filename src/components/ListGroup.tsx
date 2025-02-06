import React, { useState } from "react";

const ListGroup = () => {
  const items: String[] = [
    "Colombo",
    "Kandy",
    "Galle",
    "Mathara",
    "Kurunagala",
  ];
  const foods: String[] = ["Noodles", "Rice", "Milkrice", "Cake", "Icecream"];

  //let selectedIndex = 0;
  //Hook
  const [selectedIndex, setselectedIndex] = useState(0);
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
            <li
              key={index}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item "
              }
              onClick={() => {
                setselectedIndex(index);
                console.log(selectedIndex);
              }}
            >
              {item}
            </li>
          );
        })}

        {/* {foods.map((foods, index) => {
          return (
            <li key={index} className="list-group-item" onClick={handleClick}>
              {foods}
            </li>
          );
        })} */}
      </ul>
    </>
  );
};

export default ListGroup;
