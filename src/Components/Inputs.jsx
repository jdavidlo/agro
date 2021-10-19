import { TextField } from "@mui/material";
import {styled} from '@mui/material/styles';
import React from "react";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#43a047',
      },
      '&:hover fieldset': {
        borderColor: '#4caf50',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

const Inputs = (props) => {
    return (
        <div>
            <CssTextField id="outlined-basic" label={props.label} type={props.type} variant="outlined" sx={{width: '70%'} } InputProps={{ inputProps: { min: 1 } }}/>
        </div>
    )
}

export default Inputs