import React from 'react';
import RightPanel from './Components/RightPanel';
import LeftPanel from './Components/LeftPanel';
import Header from './Components/LeftComponents/header';

function App() {
    return (
        <>
        <div className=" h-screen w-screen bg-black text-yellow-500 ">
        
        {/* Main Content */}

        <Header/>
        <div className="flex h-full">


          {/* Left Side */}
          <div className="w-1/2 p-8 ">
                <LeftPanel/>
            </div>
          

            {/* Right Side */}
            <div className="bg-white w-1/2 ">
                <RightPanel/>
            </div>
        </div>
    </div>

    
        </>
    );
}

export default App;
