import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';

const Students = ({saveGroup}) => {
  return(
    <form>
      <TextField variant = "outlined" placeholder = "Add group" margin="normal" />
    </form>
  )
}

export default Students;
