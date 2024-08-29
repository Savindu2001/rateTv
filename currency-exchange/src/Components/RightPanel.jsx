import React, { useState, useEffect } from 'react';

function RightPanel() {
  // Hook to get the current date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    // Update date and time every second
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-black text-yellow-500 p-4">
      {/* First Video */}
      <div className="relative w-full flex-grow mb-4">
        <iframe
          className="w-full h-96"
          width="800" height="400" 
          src="https://www.youtube.com/embed/Ll8rBKU8eG4?si=g1nZONjMGVabnmNo&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <br />
      <br />
      {/* Date and Time Box */}
      <div style={{ padding: '1rem', border: '2px solid yellow', borderRadius: '0.375rem', backgroundColor: 'black', color: 'yellow', textAlign: 'center' }}>
        <p className="text-lg font-bold">Current Date & Time</p>
        <p className="text-xl">{currentDateTime}</p>
      </div>
      <br />
      <br />

      {/* Company */}
      <div style={{ padding: '1rem', border: '2px solid white', borderRadius: '0.375rem', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
        
      <div className=' text-center'>
        Exchange Rates Screen By Cey It Solutions (PVT) LTD <br />
        www.ceyitsolutions.com
        </div>
      </div>

    </div>
  );
}

export default RightPanel;
