import React from "react";

interface Props {
  message: string;
}

export const Message = ({ message }: Props) => <p>{message}</p>;
