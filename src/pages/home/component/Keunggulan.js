import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { withWidth, Grid, Paper, Typography } from '@material-ui/core'

import GavelIcon from '@material-ui/icons/Gavel';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocationCityIcon from '@material-ui/icons/LocationCity';

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
        backgroundColor: "#ffea00"
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
                                Test 1
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper color="primary" className={classes.paper}>
                            <Typography>
                                <SentimentVerySatisfiedIcon />
                            </Typography>
                            <Typography>
                                Test 2
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper color="primary" className={classes.paper}>
                            <Typography>
                                <MonetizationOnIcon />
                            </Typography>
                            <Typography>
                                Test 3
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper alignItems="center" className={classes.paper}>
                            <Typography>
                                <AssessmentIcon />
                            </Typography>
                            <Typography>
                                Test 4
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item className={classes.conten} xs={gR}>
                        <Paper alignItems="center" className={classes.paper}>
                            <Typography>
                                <LocationCityIcon />
                            </Typography>
                            <Typography>
                                Test 5
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