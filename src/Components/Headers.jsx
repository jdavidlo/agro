
import React from 'react'
import { Toolbar, Typography, AppBar, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const useStyle = makeStyles(theme => ({
    title:{
        flexGrow: 1,
    },
}))

const Header = (props) => {
    const classes = useStyle()
    return (
            <AppBar position ='fixed' color="primary" sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` },
              }} >
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu"  sx={{ mr: 2, display: { md: 'none' } }}  onClick={() => props.accionAbrir()}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title} align="center">
                        {props.titulo}
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Header