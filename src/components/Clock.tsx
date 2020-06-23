import React, { useState, useEffect } from "react";

interface Props {
  message: string;
  stop: boolean;
}

export const Clock = ({ message, stop = false }: Props) => {
  const [date, setDate] = useState(new Date());
  const [clockID, setClockID]: any = useState(-1);

  useEffect(() => {
    stop ? stopClock(clockID) : startClock();
  }, [stop]);

  const startClock = () =>
    setClockID(setInterval(() => setDate(new Date()), 1000));

  const stopClock = (interval: number) => clearInterval(interval);

  return (
    <div>
      <h2>
        {message} {date.toLocaleTimeString()}
      </h2>
    </div>
  );
};
