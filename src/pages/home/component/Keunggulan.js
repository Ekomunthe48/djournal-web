import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { withWidth, Grid, Paper, Typography } from '@material-ui/core'

import GavelIcon from '@material-ui/icons/Gavel';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import transitions from '@material-ui/core/styles/transitions';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        flexGrow: 1
    },
    conten: {
        margin: theme.spacing(1),
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: "#0d6759",
        color: "#ffffff",
    },
    align: {
        textAlign: 'left',
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
    const { width } = props;
    const direc = components[width]
    const gR = gridRow[width]

    return (
        <div className={classes.root}>

            <Grid
                container
                justify="center"
                direction={direc}
            >
                <Grid item className={classes.conten} xs={gR}>
                    <Paper color="primary" className={classes.paper}>
                        <Typography >
                            <GavelIcon />
                        </Typography>
                        <Typography>
                            <h4>Sesuai Peraturan</h4>
                            <p className={classes.align}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum, eaque a! Modi assumenda blanditiis ducimus officiis voluptatibus distinctio! 
                                Reiciendis magnam porro eius repellendus, consequuntur cum rem quod asperiores nemo eligendi.
                            </p>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item className={classes.conten} xs={gR}>
                    <Paper color="primary" className={classes.paper}>
                        <Typography>
                            <SentimentVerySatisfiedIcon />
                        </Typography>
                        <Typography>
                            <h4>Ramah Pengguna</h4>
                            <p className={classes.align}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum, eaque a! Modi assumenda blanditiis ducimus officiis voluptatibus distinctio! 
                                Reiciendis magnam porro eius repellendus, consequuntur cum rem quod asperiores nemo eligendi.
                            </p>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item className={classes.conten} xs={gR}>
                    <Paper color="primary" className={classes.paper}>
                        <Typography>
                            <MonetizationOnIcon />
                        </Typography>
                        <Typography>
                            <h4>Otomatisasi Transaksi</h4>
                            <p className={classes.align}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum, eaque a! Modi assumenda blanditiis ducimus officiis voluptatibus distinctio! 
                                Reiciendis magnam porro eius repellendus, consequuntur cum rem quod asperiores nemo eligendi.
                            </p>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item className={classes.conten} xs={gR}>
                    <Paper alignItems="center" className={classes.paper}>
                        <Typography>
                            <AssessmentIcon />
                        </Typography>
                        <Typography>
                            <h4>Pelaporan Realtime</h4>
                            <p className={classes.align}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum, eaque a! Modi assumenda blanditiis ducimus officiis voluptatibus distinctio! 
                                Reiciendis magnam porro eius repellendus, consequuntur cum rem quod asperiores nemo eligendi.
                            </p>
                        </Typography>

                    </Paper>
                </Grid>
                <Grid item className={classes.conten} xs={gR}>
                    <Paper alignItems="center" className={classes.paper}>
                        <Typography>
                            <LocationCityIcon />
                        </Typography>
                        <Typography>
                            <h4>Jenis Usaha Lengkap</h4>
                            <p className={classes.align}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum, eaque a! Modi assumenda blanditiis ducimus officiis voluptatibus distinctio! 
                                Reiciendis magnam porro eius repellendus, consequuntur cum rem quod asperiores nemo eligendi.
                            </p>
                        </Typography>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

Keunggulan.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Keunggulan);