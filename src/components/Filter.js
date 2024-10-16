import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as DisplayIcon } from '../icons_FEtask/Display.svg';
import { ReactComponent as Downicon } from '../icons_FEtask/down.svg';

const Filter = ({ setFilterOption }) => {
  const [groupOption, setGroupOption] = useState('');
  const [orderOption, setOrderOption] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  const handleGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setGroupOption(selectedGroup);
    setFilterOption(`groupBy:${selectedGroup}`);
  };

  const handleOrderChange = (e) => {
    const selectedOrder = e.target.value;
    setOrderOption(selectedOrder);
    setFilterOption(`orderBy:${selectedOrder}`);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-container" ref={dropdownRef}>
      <div className="filter-dropdown">
        <button className="filter-button" onClick={toggleOptions}>
          <DisplayIcon className="icon" />
          Display
          <Downicon className="icon" />
        </button>
      </div>

      {showOptions && (
        <div className="filter-options">
          <div className="filter-group">
            <label>Grouping</label>
            <select onChange={handleGroupChange} value={groupOption} className='so'>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="filter-order">
            <label>Ordering</label>
            <select onChange={handleOrderChange} value={orderOption} className='so'>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
