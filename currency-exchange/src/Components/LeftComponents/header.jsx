import React, { useEffect, useState } from 'react';

const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Get the current day name
    const dayName = time.toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <header className="flex items-center justify-between bg-black p-4">
            {/* Left Side - Logo and Name */}
            <div className="flex items-center">
                <h1 className="text-yellow-500 text-2xl  font-bold">HOTEL SIGIRIYA</h1>
            </div>

            {/* Middle - Center Logo */}
            <div className="flex-grow flex text-2xl justify-center">
            <div>Welcome to Sri Lanka 🙏 </div>
            </div>

            {/* Right Side - Live Date, Time, and Day */}
            <div className="text-yellow-500 text-2xl text-right">
                
                <div>{dayName}</div>
            </div>
        </header>
    );
};

export default Header;
