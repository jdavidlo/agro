import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from '@mui/material/styles';
import Inputs from "./Inputs";
import Combo from "./Combo";
import DatePic from "./DatePicker";
import Boton from "./Boton";


const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Caja = () => {
    return (
        <div>
            <Grid container >
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: '100%' } }}>
                        <Paper elevation={4} sx={{ padding:5 }}>
                            <Grid container spacing={2} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} md={6} >
                                    <Item>
                                        {/* <Inputs label='Estado'></Inputs> */}
                                        <Combo label="Estado"/>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item>
                                    <Combo label="Municipio"/>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Item>
                                        <Combo label="Cultivo"/>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item>
                                    <Combo label="Ciclo"/>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Item>
                                        <Combo label="Modalidad"/>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item>
                                    <Inputs label='Superficie en hectareas' type="Number" ></Inputs>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Item>
                                        <DatePic/>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item sx={{mt:2.5}}>
                                        <Boton contenido="Continuar"/>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Caja