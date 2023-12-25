// Header.js

import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [selectedCompany, setSelectedCompany] = useState('Company A'); // Initial company selection

  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked');
  };

  return (
    <div className="header">
      <div className="center-section">
        <img src="path/to/your/logo.png" alt="Company Logo" className="logo" />
        <div className="company-dropdown">
          <label>Company:</label>
          <select value={selectedCompany} onChange={(e) => handleCompanyChange(e.target.value)}>
            <option value="Company A">Company A</option>
            <option value="Company B">Company B</option>
            {/* Add more company options as needed */}
          </select>
        </div>
        <div className="company-name">{selectedCompany}</div>
      </div>
      <div className='right-section'>
        <div className='icon-bar'>
            <img src='' alt='notification icon' className='icon'></img>
        </div>
        <div className='button'>
            <button>
                Post a Job
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
