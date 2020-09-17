import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core'
import Keunggulan from './component/Keunggulan'

const useStyles = makeStyles((theme) => ({
    root: {
        border: '2px solid #000350',
        width: "50%",
    },
    container: {
        marginTop: theme.spacing(2)
    },
    diff: {
        marginTop: 10
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
                    </CardContent>
                </Card>
                <Keunggulan />
            </div>
        </Container>
    );
};

export default Home;