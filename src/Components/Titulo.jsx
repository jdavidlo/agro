import { Typography } from "@mui/material";
import React from "react";

const Titulo = (props) => {
    return(
        <div>
            <Typography variant="h4" color="initial" mt={1} mb={1} >{props.titulo}</Typography>
        </div>
    )
}

export default Titulo