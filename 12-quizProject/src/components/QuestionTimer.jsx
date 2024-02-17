import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const questionTimer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(questionTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const questionInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(questionInterval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} className={mode} />;
}
