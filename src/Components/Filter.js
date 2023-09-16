import React from 'react';
import './Filter.css';
import { Dropdown } from 'react-bootstrap';

const Filter = ({ filterStatus, onFilterChange }) => {
  return (
    <div className="filter">
      <Dropdown style={{display:'flex',justifyContent:'center'}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {filterStatus}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onFilterChange('ALL')}>ALL</Dropdown.Item>
          <Dropdown.Item onClick={() => onFilterChange('Active')}>Active</Dropdown.Item>
          <Dropdown.Item onClick={() => onFilterChange('Completed')}>Completed</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     
    </div>
  );
};

export default Filter;
