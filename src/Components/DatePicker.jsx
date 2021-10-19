import React from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import es from "date-fns/locale/es/index.js";
import {styled} from '@mui/material/styles';

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

const yearMin =  new Date().getFullYear() - 1;
const yearMax =  new Date().getFullYear() + 2;

const minDate = new Date(yearMin +'-01-01');
const maxDate = new Date(yearMax +'-01-01');

const DatePic = () => {

    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
            <DesktopDatePicker
                label="Inicio de siembra aproximado"
                value={value}
                date={value}
                minDate={minDate}
                maxDate={maxDate}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <CssTextField {...params} sx={{width:'70%'}}/>}
            />
        </LocalizationProvider>
    )
}

export default DatePic