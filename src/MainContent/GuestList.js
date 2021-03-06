import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest'
import PendingGuest from './PendingGuest';

const GuestList = props => <ul>
  <PendingGuest name={props.pendingGuest} />
  {
    props.guests.map((guest, index) => {
      if (!props.isFiltered || guest.isConfirmed) {
        return (<Guest key={index} name={guest.name} isConfirmed={guest.isConfirmed} isEditing={guest.isEditing} handleConfirmation={() => props.toggleConfirmationAt(index)} handleToggleEditing={() => props.toggleIsEditingAt(index)} setName={text => props.setNameAt(text, index)} handleRemove={()=>props.removeGuestAt(index)} />);
      }
      return false;
    })
  }
</ul>;

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestList;
