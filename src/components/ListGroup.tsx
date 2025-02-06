import React, { useState } from "react";

interface Props {
  items: string[];
  foods: string[];
}

const ListGroup = ({ items, foods }: Props) => {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [foodie, setFood] = useState(0);

  return (
    <>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>Items are not found</p>
        ) : (
          <p>Items are found</p>
        )}
        {foods.length === 0 && <p>Items are not found</p>}

        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setselectedIndex(index);
              console.log("Updated Index:", index);
            }}
          >
            {item}
          </li>
        ))}

        {foods.map((food, index) => (
          <li
            key={index}
            className={
              foodie === index ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setFood(index);
              console.log("Updated Food Index:", index);
            }}
          >
            {food}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
