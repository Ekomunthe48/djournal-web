import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Report from '../../../src/undraw_report_mx0a.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '10px',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            justifyContent: 'center'
        }

    },
    img: {
        width: '100%',
        height:'100%',
        maxWidth: 500,
        maxHeight: 500,
        float: 'left',
        marginRight: 10,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            maxHeight: '100%',
        }
    },
    title: {
        textAlign: 'center'
    }

}))

const Four = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <Grid>
                <img className={classes.img} src={Report} alt="friendly" />
            </Grid>
            <Grid>
                <h1 className={classes.title}> Pelaporan Realtime </h1>
                <p>
                    Mudah didapatkan karna sudah tersedia di playstore, 
                    tampilan sederhana dan menarik sehingga pengguna dapat dengan mudah menggunakannya,
                    serta terintergrasi dengan sistem cloud sehingga data aman dan tidak hilang.
                </p>
            </Grid>

        </Grid>
    );
};

export default Four;