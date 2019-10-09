import React from 'react';
import { connect } from 'react-redux';
import * as creators from '../state/actionCreators';

export const AddedFeature = (props) => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.remove(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  state => state,
  creators
)(AddedFeature);
