import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import InputComponent from './InputComponent';
import SelectComponent from './SelectComponent';
import TableComponent from './TableComponent';
import { isNameValid, getLocations } from './mock-api/apis';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const [nameError, setNameError] = useState('');
  const [entries, setEntries] = useState([]);

  /**
   * Retrieve all locations from the mock API.
   */
  useEffect(() => {
    getLocations().then(setLocations);
  }, []);

  /**
   * Confirm whether the name is a valid one.
   */
  useEffect(() => {
    if (name) {
      const timeoutId = setTimeout(() => {
        isNameValid(name).then(isValid => {
          setNameError(isValid ? '' : 'This name has already been taken');
        });
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [name]);

  /**
   * Append an entry to the list.
   */
  const handleAddEntry = useCallback(() => {
    if (!nameError && name && location) {
      setEntries([...entries, { name, location }]);
      setName('');
      setLocation('');
    }
  }, [nameError, name, location, entries, setEntries, setName, setLocation]);

  /**
   * Assign an empty array to the entries list.
   */
  const setEntriesToEmptyArray = useCallback(() => {
    setEntries([]);
  }, [setEntries]);

  /**
   * Set name of the entry
   */
  const setNameHandler = useCallback(e => {
    setName(e.target.value);
  }, [setName]);

  /**
   * Set location of the entry
   */
  const setLocationHandler = useCallback(e => {
    setLocation(e.target.value)
  }, [setLocation]);

  return (
    <Container className="py-5">
      <Row form>
        <Col md={12}>
          <InputComponent name={name} setName={setNameHandler} error={nameError} />
        </Col>
        <Col md={12}>
          <SelectComponent location={location} setLocation={setLocationHandler} options={locations} />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="d-flex justify-content-end">
          <Button color="secondary" onClick={setEntriesToEmptyArray} className="mx-3">Clear</Button>
          <Button color="primary" onClick={handleAddEntry}>Add</Button>
        </Col>
      </Row>
      <TableComponent entries={entries} />
    </Container>
  );
}

export default App;
