import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid, Avatar, Box } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: 700,
        marginTop: theme.spacing(1),

    },
    image: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    boxAction: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 10px'
    },
    creator: {
        display: 'flex',
        alignContent: 'center',
    },
    publish: {
        color: '#545465',
    },
    largeAva: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    blogNews: {
        textAlign: 'center'
    }
}))

const News = () => {
    const classes = useStyles()
    return (
        <Container>
            <div className={classes.blogNews}>
                <Typography className={classes.title} align="center" variant="h4" >
                    Alasan jurnal diperlukan pada pembukuan keuangan Bumdes
                </Typography>
                <Box className={classes.boxAction}>
                    <Box className={classes.creator}>
                        <Avatar className={classes.largeAva} alt="Mimori Suzuko"
                            src="https://www.gstatic.com/tv/thumb/persons/888627/888627_v9_aa.jpg" />
                        <Box className={classes.publish} ml={2}>
                            <Typography variant="subtitle1" component="p">
                                by: Mimori Suzuko
                            </Typography>
                            <Typography variant="subtitle1" component="p">
                                28 September 2020
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Typography className={classes.image} align="center">
                    <img width="90%" src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" />
                </Typography>
                <Typography align="justify" variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra sapien.
                    Donec eget enim vitae leo rhoncus eleifend. Donec nec enim faucibus, sollicitudin ex sit amet, fringilla sapien.
                    Donec et tempus justo. Ut quis mauris non ligula tincidunt viverra in ac velit.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra sapien.
                    Donec eget enim vitae leo rhoncus eleifend. Donec nec enim faucibus, sollicitudin ex sit amet, fringilla sapien.
                    Donec et tempus justo. Ut quis mauris non ligula tincidunt viverra in ac velit.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra sapien.
                    Donec eget enim vitae leo rhoncus eleifend. Donec nec enim faucibus, sollicitudin ex sit amet, fringilla sapien.
                    Donec et tempus justo. Ut quis mauris non ligula tincidunt viverra in ac velit.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra sapien.
                    Donec eget enim vitae leo rhoncus eleifend. Donec nec enim faucibus, sollicitudin ex sit amet, fringilla sapien.
                    Donec et tempus justo. Ut quis mauris non ligula tincidunt viverra in ac velit.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra sapien.
                    Donec eget enim vitae leo rhoncus eleifend. Donec nec enim faucibus, sollicitudin ex sit amet, fringilla sapien.
                    Donec et tempus justo. Ut quis mauris non ligula tincidunt viverra in ac velit.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra sapien.
                    Donec eget enim vitae leo rhoncus eleifend. Donec nec enim faucibus, sollicitudin ex sit amet, fringilla sapien.
                    Donec et tempus justo. Ut quis mauris non ligula tincidunt viverra in ac velit.
                </Typography>
            </div>

        </Container>
    );
};

export default News;