import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Friendly from '../../../src/3198.jpg'

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


const Two = () => {
    const classes = useStyles()
    return (
        <Grid>
            <Grid>
                <img className={classes.img} src={Friendly} alt="friendly" />
            </Grid>
            <Grid>
                <h1> Ramah Pengguna </h1>
                <p>
                    Mudah didapatkan karna sudah tersedia di playstore, 
                    tampilan sederhana dan menarik sehingga pengguna dapat dengan mudah menggunakannya,
                    serta terintergrasi dengan sistem cloud sehingga data aman dan tidak hilang.
                </p>
            </Grid>

        </Grid>
    );
};

export default Two;