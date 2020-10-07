import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Ltp from '../../../src/undraw_news_go0e.png'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginTop: 25,
        padding: 25
    },
    pic: {
        marginTop: theme.spacing(1),
        width: '100%',
        maxWidth: '720px'
    },
    h1: {
        marginBottom: theme.spacing(1),
        fontSize: '35px',
        fontFamily: `'Poppins', sans-serif`
    }
}))

const Simpabout = () => {
    const classes = useStyles()

    return (
        <Container>
            <Grid className={classes.root}>
                <h1 className={classes.h1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra sapien.
                    Donec eget enim vitae leo rhoncus eleifend. Donec nec enim faucibus, sollicitudin ex sit amet, fringilla sapien. 
                    Donec et tempus justo. Ut quis mauris non ligula tincidunt viverra in ac velit.</p>
                <img className={classes.pic} src={Ltp} alt="test" />
            </Grid>
        </Container>
    );
};

export default Simpabout;