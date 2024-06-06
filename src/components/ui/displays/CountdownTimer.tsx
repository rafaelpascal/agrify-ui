import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  duration: number; // Duration in seconds
  onTimeout: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  duration,
  onTimeout,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  return (
    <div>
      {timeLeft > 0 ? (
        <span>
          {Math.floor(timeLeft / 60)}:{("0" + (timeLeft % 60)).slice(-2)}
        </span>
      ) : (
        <button className="text-themeGreen font-bold font-DMSans text-[14px]">
          Resend
        </button>
      )}
    </div>
  );
};

export default CountdownTimer;
