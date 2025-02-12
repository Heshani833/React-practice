import React, { Children } from "react";

interface props {
  children: string;
}

const Button = ({ children }: props) => {
  return <div>{children}</div>;
};

export default Button;
