import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {styled} from '@mui/material/styles';

const array = [
    { label: 'Aguascalientes'},
    { label: 'Querétaro'},
    { label: 'Puebla'},
    { label: 'Campeche'},
    { label: 'Tabasco'},
]

const CssAutocomplete = styled(Autocomplete)({
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

const Combo = (props) => {
    return (
        <CssAutocomplete
            disablePortal
            id="combo-box-demo"
            options={array}
            sx={{ width: '70%', ml: '15%'}}
            renderInput={(params) => <TextField {...params} label={props.label} />}
        />
    )
}

export default Combo