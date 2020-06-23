import React from "react";

interface Props {
  message: string;
  handleClick: () => any;
}

export const Button = ({ message, handleClick }: Props) => (
  <button onClick={() => handleClick()}>{message}</button>
);
