import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props => {
  return (<label>
    <input type="checkbox" onChange={props.toggleFilter} checked={props.isFiltered}/>
    Hide those who haven't responded
  </label>);
}

ConfirmedFilter.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool
};

export default ConfirmedFilter;
