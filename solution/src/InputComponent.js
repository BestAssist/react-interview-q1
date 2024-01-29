import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const InputComponent = ({ name, setName, error }) => (
  <FormGroup>
    <Label for="nameInput">Name</Label>
    <Input
      type="text"
      name="name"
      id="nameInput"
      placeholder="Please enter the name here."
      value={name}
      onChange={setName}
      invalid={!!error}
    />
    <FormFeedback>{error}</FormFeedback>
  </FormGroup>
);

export default InputComponent;
