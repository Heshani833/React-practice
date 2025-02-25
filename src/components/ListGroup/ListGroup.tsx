import React, { useState } from "react";
import "./ListGroup.css";

interface props {
  items: string[];
  foods: string[];
  //pasing function through props
  // onSelectedItem: (item: string) => void;
  // onSelectedFood: (food: string) => void;
}

//component function
const ListGroup = ({ items, foods }: props) => {
  //let selectedIndex = 0;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedFood, setSelectedFood] = useState(0);
  return (
    <>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>Items are not founf</p>
        ) : (
          <p>Items are found</p>
        )}
        {foods.length === 0 && <p>Items are not found</p>}

        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          );
        })}
        {foods.map((food, index) => {
          return (
            <li
              key={index}
              className={
                selectedFood === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedFood(index);
              }}
            >
              {food}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
