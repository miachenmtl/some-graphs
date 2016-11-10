import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

export default function Options(props) {
  return (
    <div>
      <FormGroup>
        <ControlLabel>Stack bars or arrange in groups</ControlLabel>
        <FormControl
          componentClass="select"
          id="barmode"
          onChange={props.onChangeBarMode.bind(props.that)}
          value={props.barmode}
        >
          <option>stack</option>
          <option>group</option>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Horizontal or Vertical</ControlLabel>
        <FormControl
          componentClass="select"
          id="orientation"
          onChange={props.onChangeOrientation.bind(props.that)}
          value={props.orientation}
        >
          <option>h</option>
          <option>v</option>
        </FormControl>
      </FormGroup>
    </div>
  )
}
