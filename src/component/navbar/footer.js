import React, { Fragment } from 'react';
import { Button, Container, Divider, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import Linke from '@material-ui/core/Link'
import { Link } from "react-router-dom"

import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

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
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }
    },
    buttonAlign: {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        }

    },
    play: {
        textAlign: 'right',
        [theme.breakpoints.down('xs')]: {
            marginTop: 10,
            textAlign: 'center'
        }
    },
    play2: {
        maxWidth: 127,
        maxHeight: 44,
        transition: 'ease 0.4s',
        '&:hover': {
            transform: 'scale(0.9)',
            opacity: 0.5, 
        }
    },
    listColor: {
        color: '#0d6759',
        textDecoration: 'none',
        '&:hover': {
          color: "#479586",
    
        },
    },
    follow: {
        color: '#0d6759',
        display: 'grid',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            justifyItems: 'center',
            textAlign: 'center'
        }
    },
    flwTitle: {
        justifyContent: 'right',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        }
    },
    sosial: {
        display: 'grid',
        justifyContent: 'right',
        justifyItems: 'right',
        gridTemplateColumns: 'repeat(3, 50px)',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            justifyItems: 'center',
        }
    },
    sosialIcon: {
        color: '#0d6759',
        '&:hover': {
            transition: 'ease 0.6s',
            color: "#102c5c",
        },
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <Fragment>
            <Container className={classes.root}>
                <Divider />
                <Grid className={classes.footerContent}>
                    <div className={classes.footerBar}>
                        {['Contact Us', 'FAQ', 'Terms & Conditions'].map((text) => (
                            <Link to={`/${text}`} className={classes.listColor}>
                                <Button color="primary" className={classes.buttonAlign} >{text}</Button>
                            </Link>
                        ))}
                    </div>
                    <div className={classes.play}>
                        <div className={classes.follow}>
                            <Typography variant="subtitle1" className={classes.flwTitle}>Ikuti kami di</Typography>
                            <div className={classes.sosial}>
                                <IconButton className={classes.sosialIcon}> <FacebookIcon /> </IconButton>
                                <IconButton className={classes.sosialIcon}> <InstagramIcon /> </IconButton>
                                <IconButton className={classes.sosialIcon}> <TwitterIcon /> </IconButton>
                            </div>
                        </div>
                        <Typography variant="subtitle1" color="primary">Tunggu apa lagi download sekarang di :</Typography>
                        <Linke href="https://play.google.com/" >
                            <img
                                className={classes.play2}
                                src={gPlay}
                                alt="Google Play"
                            />
                        </Linke>
                    </div>
                </Grid>
            </Container>
            <div id="footer-copyright">
                © 2020 Eko Bambang Prasetio Munthe. All rights reserved.
            </div>
        </Fragment>
    );
};

export default Footer;