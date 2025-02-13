import React from "react";

const ListGroupNew = () => {
  const items: string[] = ["Colombo", "Kandy", "Badulla", "Matara", "Galle"];

  let message;
  if (items.length === 0) {
    message = <p>Items are not found</p>;
  } else {
    message = <p>Items are found</p>;
  }

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
        {message}
      </ul>
    </>
  );
};

export default ListGroupNew;
