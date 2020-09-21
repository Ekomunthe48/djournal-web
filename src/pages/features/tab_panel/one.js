import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Rule from '../../../src/—Pngtree—law balance justice justice lawyer_5473209.png'

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

const One = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <Grid>
                <img className={classes.img} src={Rule} alt="Laws" />
            </Grid>
            <Grid>
                <h1 className={classes.title}> Sesuai Peraturan </h1>
                <p>
                    Dimana aplikasi ini dibuat sudah sesuai dengan peraturan yang telah dikeluarkan 
                    diantaranya: 
                    <p>1. UU Nomor 6/2014</p>
                    <p>2. PP Nomor 11/2019 </p>
                    <p>3. Permendagri Nomor 113/2014 dan Nomor 1/2016 </p>
                    <p>4. PermenDESA PDTT Nomor 4/2015</p>
                </p>
            </Grid>

        </Grid>
    );
};

export default One;