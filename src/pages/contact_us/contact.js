import React, { Fragment } from 'react';
import { Box, Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

import djurnalLogo from '../../src/9.c Mockup.jpg'
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
        textAlign: 'center',
    },
    display: {
        display: 'flex',
        alignItems: 'justify',
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'grid'
        }
    },
    icon: {
        marginRight: theme.spacing(3),
    },
    djurnal: {
        width: 150,
        height: 100,
        marginBottom: theme.spacing(1)
    },
    title: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        height: 500,
        maxHeight: '100%',
        flexDirection: 'column',
        background: '#479586 url(https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80) center center no-repeat',
        backgroundBlendMode: 'multiply',
        backgroundImage: 'url(https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80)',
        backgroundSize: 'cover',
        position: 'relative',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fafafa',
        
    }
}))
const Contact = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <Container>
                <Grid className={classes.root} alignContent="center">
                    <Box className={classes.title} >
                        <Typography  align="center" variant="h3">
                            Contact Us
                        </Typography>
                        <Typography  align="center" variant="subtitle1">
                            Silahkan sampaikan pesan anda disini , karna kritik dan masukan anda sangat diperlukan untuk membangun Djurnal menjadi lebih baik
                        </Typography>
                    </Box>
                    <Grid className={classes.display}>
                        <TextField
                            id="outlined-secondary"
                            label="Name"
                            fullWidth="true"
                            variant="outlined"
                            color="secondary"
                        />
                    </Grid>
                    <Grid className={classes.display}>
                        <TextField
                            id="outlined-secondary"
                            label="Email"
                            fullWidth="true"
                            variant="outlined"
                            color="secondary"
                        />
                    </Grid>
                    <Grid className={classes.display}>
                        <TextField
                            id="outlined-secondary"
                            label="Pesan"
                            multiline
                            rows={10}
                            fullWidth="true"
                            size="medium"
                            variant="outlined"
                            color="secondary"
                        />
                    </Grid>
                    <Button  variant="contained" color='primary' fullWidth={true}>Kirim</Button>
                </Grid>
            </Container>

        </Fragment>
    );
};

export default Contact;