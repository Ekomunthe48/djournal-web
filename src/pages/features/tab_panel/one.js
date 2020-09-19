import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Rule from '../../../src/—Pngtree—law balance justice justice lawyer_5473209.png'

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height:'100%',
        maxWidth: 500,
        maxHeight: 500,
        float: 'left',
        marginRight: 10,
    }

}))

const One = () => {
    const classes = useStyles()
    return (
        <Grid>
            <Grid>
                <img className={classes.img} src={Rule} alt="Laws" />
            </Grid>
            <Grid>
                <h1> Sesuai Peraturan </h1>
                <p>
                    dimana aplikasi ini dibuat sudah sesuai dengan peraturan yang telah dikeluarkan 
                    diantaranya: 
                    1. UU Nomor 6/2014 
                    2. PP Nomor 11/2019 
                    3. Permendagri Nomor 113/2014 dan Nomor 1/2016 
                    4. PermenDESA PDTT Nomor 4/2015 
                </p>
            </Grid>

        </Grid>
    );
};

export default One;