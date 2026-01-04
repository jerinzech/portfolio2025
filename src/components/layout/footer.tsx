"use client";
import React, { useState, useEffect } from 'react'

function Footer() {

  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // 1. Function to update the time
    const updateTime = () => {
      const now = new Date();
      // Format: "14:30:45" (24-hour) or use 'en-US' for AM/PM
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };

    // 2. Run immediately, then every second (1000ms)
    updateTime();
    const timerId = setInterval(updateTime, 1000);

    // 3. Cleanup the timer if the user leaves the page
    return () => clearInterval(timerId);
  }, []);
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const now = new Date();

    // Option 1: The standard readable format
    // Result: "Tuesday, December 30, 2025"
    const standardFormat = now.toLocaleDateString("en-US", {
      weekday: "long", // "Tuesday"
      year: "numeric", // "2025"
      month: "long",   // "December"
      day: "numeric",  // "30"
    });

    // Option 2: Custom "Date. Day Month" format 
    // Result: "30. Tuesday December"
    const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
    const monthName = now.toLocaleDateString("en-US", { month: "long" });
    const dayNumber = now.getDate();

    // Combine them however you like:
    const customFormat = `${dayNumber}. ${dayName} ${monthName}`;

    setDateString(standardFormat); // Change this to customFormat if you prefer Option 2
  }, []);

  // Avoid "Hydration Mismatch" by rendering nothing until loaded
  if (!time) return null;


  return (
    <div className="flex flex-row items-center justify-center text-[15px] lg:text-[16px] font-['Alexandria'] font-regular tracking-[-0.04em]" > {dateString} <span style={{ marginRight: '2rem', marginLeft: '2rem' }
    }>|</span> {time} </div >
  )
}



export default Footer