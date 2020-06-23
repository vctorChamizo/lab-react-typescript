import React, { useState } from "react";

interface Props {
  message: string;
}

export const Clock = ({ message }: Props) => {
  const [date, setDate] = useState(new Date());
  let timerID: any = null;

  const componentDidMount = () =>
    (timerID = setInterval(() => setDate(new Date()), 1000));

  const componentWillUnmount = () => clearInterval(timerID);

  return (
    <div>
      <h2>
        {message} {date.toLocaleTimeString()}.
      </h2>
    </div>
  );
};
