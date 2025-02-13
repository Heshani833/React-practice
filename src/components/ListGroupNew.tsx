import React from "react";

const ListGroupNew = () => {
  const items: string[] = ["Colombo", "Kandy", "Badulla", "Matara", "Galle"];

  switch (items.length) {
    case 0:
      return <p>No items available.</p>;
    case 1:
      return <p>One item available.</p>;
    case 2:
      return <p>Two items available.</p>;
    case 3:
      return <p>Three items available.</p>;
    case 4:
      return <p>Four items available.</p>;
    case 5:
      return <p>Five items available.</p>;
    default:
      return <p>More than five items available.</p>;
  }
};

export default ListGroupNew;
