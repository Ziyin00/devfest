"use client";

import { useEffect, useState } from "react";

const getTimeLeft = (expiry) => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days, hours, minutes, seconds };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return { days, hours, minutes, seconds };
};

const Timer = ({ launchDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

    return (
      
<div className='  border border-[#3A6CFF] sm:hidden p-4 text-2xl rounded-3xl  w-[60%] text-center ml-20  mt-2'>
          <span>  {timeLeft.days} : </span>  <span>        {timeLeft.hours}
          : </span> <span> {timeLeft.minutes} : </span> <span className='text-gray-400'> {timeLeft.seconds} </span>
          
       </div>

    
  );
};

export default Timer;
