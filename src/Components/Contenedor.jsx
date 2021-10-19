import React from "react";
import Header from "./Headers";
import SideBar from "./SideBar";
import Caja from "./Caja";

import { makeStyles } from '@mui/styles'
import Titulo from "./Titulo";

const estilos = makeStyles(theme => ({
    root:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Contenedor = () => {
    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)
    const accionAbrir = () => {
        setAbrir(!abrir)
    }
    return (
        <div className={classes.root}>
            <Header accionAbrir={accionAbrir} titulo='Cotiza' />
            <SideBar variant="permanent" open={true}/>
            <SideBar variant="temporary" open={abrir} onClose={accionAbrir} />
            <div className={classes.content}>
                <div className={classes.toolbar}>
                </div>
                <Titulo titulo='Predio'/>
                <Caja/>
            </div>
        </div>
    )
}

export default Contenedor