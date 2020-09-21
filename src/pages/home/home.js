import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia, Container, Grid, Link, Typography } from '@material-ui/core'
import Keunggulan from './component/Keunggulan'

import gPlay from '../../src/google-play-badge (1).png'
import phone from '../../src/—Pngtree—smartphone in hand, isolated on_3698286.png'

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        background: 'transparent',
        height: 'fit-content',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(1, 1fr))'
        }
    },
    container: {
        marginTop: theme.spacing(2)
    },
    diff: {
        marginTop: 10
    },
    linkAlign: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        }
    },
    play: {
        width: 127,
        height: 44,
        marginTop: 10,
        transition: 'ease 0.4s',
        '&:hover': {
            transform: 'scale(0.9)',
            opacity: 0.5,
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        }
    },
    header: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            textAlign: 'center',
        }
    },
    card: {
        left: '50%',
        top: '50%',
        transform: 'translate(85px,236px)',
        [theme.breakpoints.down('md')]: {
            left: 0,
            top: 0,
        }, 
        [theme.breakpoints.down('sm')]: {
            transform: 'none',
        } 
    },
    phone: {
        width: '100%',
        maxWidth: 500,
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center'
        }
    }
}))


const Home = () => {
    const classes = useStyles()

    return (
        <Container>
            <div className={classes.container}>
                <Grid className={classes.header} xs={12}>
                    <Grid className={classes.card}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography gutterBottom color="primary" variant="h5" component="h5">
                                    Download Djournal dan dapatkan manfaatnya
                                </Typography>
                                <Typography gutterBottom variant="caption">
                                    Djournal merupakan aplikasi yang membantu dalam pengelolaan BUMDES
                                </Typography>
                            </CardContent>
                            <Link className={classes.linkAlign} href="https://play.google.com/">
                                    <img
                                        alt="play"
                                        className={classes.play}
                                        src={gPlay}
                                    />
                                </Link>
                        </Card>
                    </Grid>
                    <Grid justify="center">
                        <img className={classes.phone} src={phone} alt="djurnal" />
                    </Grid>
                </Grid>
                <Keunggulan />
            </div>
        </Container>
    );
};

export default Home;