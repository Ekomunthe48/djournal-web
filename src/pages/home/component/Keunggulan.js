import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { withWidth, Grid, Paper, Typography, Zoom, Button } from '@material-ui/core'

import GavelIcon from '@material-ui/icons/Gavel';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        flexGrow: 1,
        textAlign: 'center'
    },
    conten: {
        margin: theme.spacing(1),
        textAlign: 'center',

    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: '#ffffff',
        color: '#0d6759',
        border: '1px solid #43548a',
        boxShadow: '1px 0px 1px #0d6759',
        '&:hover':{
            transition: 'ease 0.1s',
            transitionDelay: '0.2s',
            transform: 'scale(1.1,1.1)'
        }
        
    },
    buttonClr: {
        marginTop: theme.spacing(3),
        backgroundColor: '#0d6759',
        color: '#ffffff',
        '&:hover':{
            backgroundColor: '#479586'
        }
    },
    link : {
        textDecoration: 'none',
        
    },
    keunggulan : {
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: 700
    }
}))

const components = {
    xs: 'column',
    sm: 'column',
    md: 'row',
    lg: 'row',
    xl: 'row'
}

const gridRow = {

    xs: '12',
    sm: '12',
    md: '4',
    lg: '2',
    xl: '2'

}

const Keunggulan = (props) => {
    const classes = useStyles()
    const { width } = props
    const direc = components[width]
    const gR = gridRow[width]

    return (
        <div className={classes.root}>
            <Grid>
                <Typography className={classes.keunggulan} gutterBottom variant="h4">Keunggulan dari Djurnal</Typography>
            </Grid>
            <Grid
                container
                justify="center"
                direction={direc}
            >   
                <Zoom in={true} timeout={400}>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper color="primary" className={classes.paper}>
                            <Typography >
                                <GavelIcon style={{fontSize: "3.5rem"}}/>
                            </Typography>
                            <Typography variant="subtitle1">
                                Sesuai Peraturan
                            </Typography>
                        </Paper>
                    </Grid>
                </Zoom>
                <Zoom in={true} timeout={500}>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper color="primary" className={classes.paper}>
                            <Typography>
                                <SentimentVerySatisfiedIcon style={{fontSize: "3.5rem"}} />
                            </Typography>
                            <Typography variant="subtitle1">
                                Ramah Pengguna
                            </Typography>
                        </Paper>
                    </Grid>
                </Zoom>
                <Zoom in={true} timeout={600}>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper color="primary" className={classes.paper}>
                            <Typography>
                                <MonetizationOnIcon  style={{fontSize: "3.5rem"}}/>
                            </Typography>
                            <Typography variant="subtitle1">
                                Otomatisasi Transaksi
                            </Typography>
                        </Paper>
                    </Grid>
                </Zoom>
                <Zoom in={true} timeout={700}>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper alignItems="center" className={classes.paper}>
                            <Typography>
                                <AssessmentIcon style={{fontSize: "3.5rem"}} />
                            </Typography>
                            <Typography variant="subtitle1">
                                Pelaporan Realtime
                            </Typography>
                        </Paper>
                    </Grid>                
                </Zoom>
                <Zoom in={true} timeout={800}>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper alignItems="center" className={classes.paper}>
                            <Typography>
                                <LocationCityIcon style={{fontSize: "3.5rem"}} />
                            </Typography>
                            <Typography variant="subtitle1">
                                Jenis Usaha Lengkap
                            </Typography>
                        </Paper>
                    </Grid>
                </Zoom>
            </Grid>
            <Link className={classes.link} to="/Features">
            <Button className={classes.buttonClr}> See More... </Button>
            </Link>    
        </div>
    );
};

Keunggulan.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Keunggulan);