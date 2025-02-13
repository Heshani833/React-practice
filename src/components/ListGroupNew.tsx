import React from "react";

const ListGroupNew = () => {
  const items: string[] = [];
  return <>{items.length === 0 && <p>Items are not found</p>}</>;
};

export default ListGroupNew;
