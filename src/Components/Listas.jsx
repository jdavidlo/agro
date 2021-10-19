import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import RequestPageIcon from '@mui/icons-material/RequestPage';
import { makeStyles } from '@mui/styles'

const estilos = makeStyles(theme => ({
    espacio:{
        marginTop: '30%'
    }
}))

const Listas = () => {
    const classes = estilos()
    return(
        <div>
            <List component="nav">
                <div className={classes.espacio}></div>
                <ListItem button>
                    <ListItemIcon>
                        <RequestPageIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Cotizar
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Listas