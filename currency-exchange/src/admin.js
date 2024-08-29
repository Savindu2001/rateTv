import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const AdminPanel = () => {
  const [rates, setRates] = useState([]);
  const [newRate, setNewRate] = useState({ currency: '', buying: '', selling: '' });

  useEffect(() => {
    fetch('http://localhost:3001/api/rates')
      .then((response) => response.json())
      .then((data) => setRates(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRate({ ...newRate, [name]: value });
  };

  const addRate = () => {
    setRates([...rates, newRate]);
    setNewRate({ currency: '', buying: '', selling: '' });
  };

  const deleteRate = (index) => {
    const updatedRates = rates.filter((_, i) => i !== index);
    setRates(updatedRates);
  };

  const saveRates = () => {
    axios.post('http://localhost:3001/api/rates', rates).then((response) => {
      alert(response.data.message);
    });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Manage Currency Rates</h2>
      <div className="add-rate">
        <input
          type="text"
          name="currency"
          value={newRate.currency}
          onChange={handleInputChange}
          placeholder="Currency"
        />
        <input
          type="number"
          name="buying"
          value={newRate.buying}
          onChange={handleInputChange}
          placeholder="Buying Rate"
        />
        <input
          type="number"
          name="selling"
          value={newRate.selling}
          onChange={handleInputChange}
          placeholder="Selling Rate"
        />
        <button onClick={addRate}>Add Rate</button>
      </div>

      <ul>
        {rates.map((rate, index) => (
          <li key={index}>
            {rate.currency}: Buying {rate.buying}, Selling {rate.selling}
            <button onClick={() => deleteRate(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={saveRates}>Save Rates</button>
    </div>
  );
};

export default AdminPanel;
