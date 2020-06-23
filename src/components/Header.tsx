import React from "react";

interface Props {
  message: string;
}

export const Header = ({ message }: Props) => <h1>{message}</h1>;
