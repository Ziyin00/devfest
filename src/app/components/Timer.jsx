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
      
<div className='  border border-[#3A6CFF] sm:hidden p-4 text-2xl rounded-3xl  w-[60%] text-center ml-20  my-2'>
          <span>  {timeLeft.days} : </span>  <span>        {timeLeft.hours}
          : </span> <span> {timeLeft.minutes} : </span> <span className='text-gray-400'> {timeLeft.seconds} </span>
          
       </div>

    // <div className="flex justify-center lg:justify-start mt-10 gap-3">
    //   <span className="flex flex-col justify-center items-center bg-black text-yellow text-3xl lg:text-5xl w-36 py-3 shadow-lg rounded-lg">
    //     {timeLeft.days}
    //     <small className="text-xs lg:text-sm uppercase font-semibold text-white">
    //       Days
    //     </small>
    //   </span>
    //   <span className="flex flex-col justify-center items-center bg-black text-yellow text-3xl lg:text-5xl w-36 py-3 shadow-lg rounded-lg">
    //     {timeLeft.hours}
    //     <small className="text-xs lg:text-sm uppercase font-semibold text-white">
    //       Hours
    //     </small>
    //   </span>
    //   <span className="flex flex-col justify-center items-center bg-black text-yellow text-3xl lg:text-5xl w-36 py-3 shadow-lg rounded-lg">
    //     {timeLeft.minutes}
    //     <small className="text-xs lg:text-sm uppercase font-semibold text-white">
    //       Minutes
    //     </small>
    //   </span>
    //   <span className="flex flex-col justify-center items-center bg-black text-yellow text-3xl lg:text-5xl w-36 py-3 shadow-lg rounded-lg">
    //     {timeLeft.seconds}
    //     <small className="text-xs lg:text-sm uppercase font-semibold text-white">
    //       Seconds
    //     </small>
    //   </span>
    // </div>
  );
};

export default Timer;
