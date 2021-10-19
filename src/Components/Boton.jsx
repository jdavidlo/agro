import React from "react";
import Button from '@mui/material/Button';

const Boton = (props) => {
    return (
        <div>
            <Button variant="contained" size="medium" sx={{width:"50%"}}>{props.contenido}</Button>
        </div>  
    )
}

export default Boton 