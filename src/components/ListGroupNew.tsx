import React from "react";

const ListGroupNew = () => {
  const items: string[] = ["Colombo", "Kandy", "Badulla", "Matara", "Galle"];
  return (
    <>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>Items are not found.</p>
        ) : (
          <p>Items are found</p>
        )}
      </ul>
    </>
  );
};

export default ListGroupNew;
