import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const SelectComponent = ({ location, setLocation, options }) => (
  <FormGroup>
    <Label for="locationSelect">Location</Label>
    <Input
      type="select"
      name="location"
      id="locationSelect"
      value={location}
      onChange={setLocation}
    >
      <option value="">Select location</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Input>
  </FormGroup>
);

export default SelectComponent;
