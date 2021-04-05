import React from 'react';
import { useHistory } from 'react-router-dom';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton';


const EditButton = ({ id, code }) => {
  const history = useHistory();

  return (
    <IconButton onClick={() => history.push(`/EditProduct/${id}/${code}`)} edge="start" aria-label="edit">
      <EditRoundedIcon />
    </IconButton>
  );
};

export default EditButton;