import React, { useState, useEffect } from 'react';

function Footer() {
  // Hook to get current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-black text-yellow-500 flex items-center justify-between p-4">
      {/* Time Display */}
      <div className="text-lg font-bold">
        {currentTime}
      </div>

      {/* Ticker Animation */}
      <div className="overflow-hidden whitespace-nowrap flex-grow ml-4">
        <div className="inline-block animate-marquee">
            <marquee behavior="" direction="">Breaking News: Welcome to Hotel Sigiriya! Enjoy Your Stay! This is Live Currency Rates! Welcome to Sri Lanka!</marquee>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
