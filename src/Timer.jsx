import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setIsActive(false);
    setSeconds(10);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    if (seconds === 0) {
      alert('시간이 종료되었습니다.');
      clearInterval(interval);
      setIsActive(false);
      setSeconds(10);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <p>남은 시간: {seconds}초</p>
      <button onClick={toggle}>{isActive ? '정지' : '시작'}</button>
      <button onClick={reset}>리셋</button>
    </div>
  );
}

export default Timer;
