import React from "react";
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
    hidden:{
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display:"block"
        }
    }
}))

const Oculto = () => {
    const classes = useStyle()

    return(
        <div>
            <Typography variant="h6" color="initial">
                Ancho: xs
            </Typography>
            <Typography variant="h6" color="initial">
                Ancho: sm
            </Typography>
            <Typography variant="h6" color="initial" className={classes.hidden}>
                Ancho: md
            </Typography>
            <Typography variant="h6" color="initial" className={classes.hidden}>
                Ancho: lg
            </Typography>
        </div>
    )
}

export default Oculto