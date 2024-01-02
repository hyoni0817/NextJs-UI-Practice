import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Realtime = () => {
  const [days, setDays] = useState<any>(null);
  const [hours, setHours] = useState<any>(null);
  const [minutes, setMinutes] = useState<any>(null);
  const [seconds, setSeconds] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const targetDate = moment('2024-01-03');
      const currentDate = moment();
      const remainTime = moment.duration((targetDate as moment.Moment).diff(currentDate));

      setDays(remainTime.days());
      setHours(remainTime.hours());
      setMinutes(remainTime.minutes());
      setSeconds(remainTime.seconds());
    }, 1000);

    // 초기화 clear (unmount될 때 타이머 reset)
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      {days}일 {hours}시간 {minutes}분 {seconds}초
    </div>
  );
};

export default Realtime;
