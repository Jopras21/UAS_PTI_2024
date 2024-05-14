import React, { useState, useEffect } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeUnit = (unit) => (unit.length === 1 ? `0${unit}` : unit);

  const sh = formatTimeUnit(time.getHours().toString());
  const sm = formatTimeUnit(time.getMinutes().toString());
  const ss = formatTimeUnit(time.getSeconds().toString());

  return (
    <div id="jam">
      {sh}:{sm}:{ss}
    </div>
  );
};

export default Time;