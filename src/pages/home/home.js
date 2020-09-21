import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia, Container, Link, Typography } from '@material-ui/core'
import Keunggulan from './component/Keunggulan'

import gPlay from '../../src/google-play-badge (1).png'

const useStyles = makeStyles((theme) => ({
    root: {
        border: '2px solid #000350',
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    },
    container: {
        marginTop: theme.spacing(2)
    },
    diff: {
        marginTop: 10
    },
    play: {
        maxWidth: 127,
        maxHeight: 44,
        marginTop: 10,
        transition: 'ease 0.4s',
        '&:hover': {
            transform: 'scale(0.9)',
            opacity: 0.5, 
        }
    }
}))


const Home = () => {
    const classes = useStyles()

    return (
        <Container>
            <div className={classes.container}>
                <Card className={classes.root} xs={6}>
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h5" component="h5">
                            Download Djournal dan dapatkan manfaatnya
                        </Typography>
                        <Typography gutterBottom variant="caption">
                            Djournal merupakan aplikasi yang membantu dalam pengelolaan BUMDES
                        </Typography>
                        <Link href="https://play.google.com/">
                            <CardMedia
                                component="img"
                                className={classes.play}
                                image={gPlay}
                            />
                        </Link>
                    </CardContent>
                </Card>
                <Keunggulan />
            </div>
        </Container>
    );
};

export default Home;