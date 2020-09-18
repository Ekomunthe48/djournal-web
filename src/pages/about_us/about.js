import React from 'react';
import { Container, Grid, Card, Typography, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
        height: 200,
        textAlign: 'center',
    },
    card: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
        }
    },
    conten: {
        margin: theme.spacing(1),
    },
    alignItems: {
        textAlign: "center"
    }
}))

const About = () => {
    const classes = useStyles()

    return (
        <Container>
            <div>
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, eaque a! Modi assumenda blanditiis ducimus officiis voluptatibus distinctio!
                    Reiciendis magnam porro eius repellendus, consequuntur cum rem quod asperiores nemo eligendi.
                </p>
            </div>
            <Grid spacing={2} justify="center" direction="column">
                
                <Typography gutterBottom variant="h5" className={classes.alignItems}>
                    Pendiri Djournal
                </Typography>

                <Grid container xs={12} justify="center" >
                    
                    <Grid xs={5} className={classes.conten}>
                        <Card className={classes.card}>
                            <CardMedia
                                component="img"
                                className={classes.root}
                                image="https://vignette.wikia.nocookie.net/half-life/images/6/62/Gaben.jpg/revision/latest/scale-to-width-down/666?cb=20200126040848&path-prefix=en"
                                title="Gaben"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1">
                                    People 1
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    Lorem ipsum
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={5} className={classes.conten}>
                        <Card className={classes.card}>
                            <CardMedia
                                component="img"
                                className={classes.root}    
                                image="https://vignette.wikia.nocookie.net/love-live/images/1/18/Kubo_Yurika_Infobox_Image.jpg/revision/latest?cb=20160927171902"
                                title="hanayo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1">
                                    People 2
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    Lorem ipsum
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;