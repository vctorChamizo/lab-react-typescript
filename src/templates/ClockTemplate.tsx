import React, { useState } from "react";
import { Clock, Header, Button, Message } from "../components";

export const ClockTemplate = () => {
  const [stopClock, setStopClock] = useState(false);

  return (
    <>
      <Header message={"Project with TypeScript & React"} />
      <Clock message={"Local time:"} stop={stopClock} />
      <Button
        message={!stopClock ? "Stop" : "Reload"}
        handleClick={() => setStopClock(!stopClock)}
      />
      {stopClock && (
        <Message
          message={"Click the button to reload the current local time"}
        />
      )}
    </>
  );
};
