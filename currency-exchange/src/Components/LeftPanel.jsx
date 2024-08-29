import React from 'react';
import Table from './LeftComponents/table';

function LeftPanel() {
  return (
    <div className="flex flex-col h-screen bg-black text-yellow-500">
      {/* Currency Table */}
      <Table />
        <br />
        <br />
        <br />
        <hr />
      {/* Marquee */}
      <div className="my-4">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee text-yellow-500">
           <marquee behavior="" direction="">Welcome to Hotel Sigiriya! Enjoy Your Stay! This is Live Currency Rates! Welcome to Sri Lanka!</marquee> 
          </div>
        </div>
      </div>
      <hr />

      {/* Spacer to push footer to the bottom */}
      <div className="flex-grow"></div>
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      {/* Footer */}
      <footer className="p-4 bg-black text-yellow-500">
        <p className="text-center">© 2024 Hotel Sigiriya. All rights reserved.</p>
        <br />
        <br />
        
        <div className=' text-center'>
        www.HotelSigiriya.com
        </div>
        
      </footer>
    </div>
  );
}

export default LeftPanel;
