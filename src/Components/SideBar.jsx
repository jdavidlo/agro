import React from "react";
import { makeStyles } from '@mui/styles'
import { Divider, Drawer } from "@mui/material";
import Listas from "./Listas";
import Logo from "../img/logo.PNG"

const drawerWidth = 240;

const estilos = makeStyles(theme => ({
    drawer:{
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    photo: {
        width: '80%',
        marginLeft: '8%',
        marginTop: '2%'
    },
    hidden:{
        display: "none",
        [theme.breakpoints.up("md")]:{
            display:"block"
        }
    }
}))

const SideBar = (props) => {
    const classes = estilos()
    return (
        <div className={classes.hidden}>
            <Drawer className={classes.drawer} variant={props.variant} open={props.open} onClose={props.onClose ? props.onClose : null} classes={{paper: classes.drawerPaper,}} anchor="left">
            <div className={classes.toolbar}>
                <img src={Logo} className={classes.photo} alt="logo"/>
            </div>
            <Divider/>
            <Listas/>
        </Drawer>
        </div>
        
    )
}

export default SideBar