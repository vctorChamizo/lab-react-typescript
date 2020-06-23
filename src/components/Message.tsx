import React from "react";

interface BodyProps {
  message: string;
}

export const Message = ({ message }: BodyProps) => (
  <div>
    <p>{message}</p>
  </div>
);
