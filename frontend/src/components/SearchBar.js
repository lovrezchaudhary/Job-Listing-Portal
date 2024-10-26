import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSearch} className="mb-4 d-flex justify-content-center" >
      <InputGroup className="mb-3" style={{ maxWidth: '500px', width: '100%' }}>
        <Form.Control
          type="text"
          placeholder="Search jobs..."
          name="query"
          className="rounded-start" 
          aria-label="Search jobs"
          style={{ backgroundColor: '#FEF9F2' }}
        />
        <Button type="submit" variant="success" className="rounded-end"> 
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
