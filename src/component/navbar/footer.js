import React, { Fragment } from 'react';
import { Button, Container, Grid, Link, makeStyles } from '@material-ui/core';

import './footer.scss'
import gPlay from '../../src/google-play-badge (1).png'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    footerContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            justifyContent: 'center'
            
        }
    },
    footerBar: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
    },
    buttonAlign: {
        justifyContent: 'left'
    },
    play: {
        textAlign: 'right'
    },
    play2: {
        maxWidth: 127,
        maxHeight: 44,
        marginTop: 10,
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <Fragment>
            <Container className={classes.root}>
                <Grid className={classes.footerContent}>
                    <div className={classes.footerBar}>

                        {['Contact Us', 'FAQ', 'Terms & Conditions'].map((text) => (
                            <Button className={classes.buttonAlign} >{text}</Button>
                        ))}
                    </div>
                    <Link href="https://play.google.com/" className={classes.play}>
                        <img
                            className={classes.play2}
                            src={gPlay}
                            alt="Google Play"
                        />
                    </Link>
                </Grid>
            </Container>
            <div id="footer-copyright">
                © 2020 Eko Bambang Prasetio Munthe. All rights reserved.
            </div>
        </Fragment>
    );
};

export default Footer;