import React, { Fragment } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

import BusinessIcon from '@material-ui/icons/Business'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail'

import djurnalLogo from '../../src/4.a Djurnal Vertical PNG.png'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
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
    }
}))
const Contact = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.56327152454!2d106.8718253140276!3d-6.189147995519348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f48f975dcb11%3A0xc1176b766df1697e!2sGreen%20Pramuka%20Square%20Mall!5e0!3m2!1sen!2sid!4v1600573543679!5m2!1sen!2sid" width="100%" height="450" frameborder="0" title="office" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <Container>
                <Grid className={classes.root}>
                    <img
                        className={classes.djurnal}
                        src={djurnalLogo}
                        alt="DJURNAL"
                    />
                    <Grid className={classes.display}>
                        <Grid className={classes.icon}>
                            <BusinessIcon style={{ fontSize: "2rem" }} />
                        </Grid>
                        <Grid>
                            <h4>Alamat</h4>
                            <p>Jl. Rw. Jaya No.49, Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10570</p>
                        </Grid>
                    </Grid>
                    <Grid className={classes.display}>
                        <Grid className={classes.icon}>
                            <PhoneIcon style={{ fontSize: "2rem" }} />
                        </Grid>
                        <Grid>
                            <h4>Telepon</h4>
                            <p>+62812-3456-7890</p>
                        </Grid>
                    </Grid>
                    <Grid className={classes.display}>
                        <Grid className={classes.icon}>
                            <MailIcon style={{ fontSize: "2rem" }} />
                        </Grid>
                        <Grid>
                            <h4>Email</h4>
                            <p>info@djurnal.id</p>
                        </Grid>
                    </Grid>
                    <div></div>
                </Grid>
            </Container>

        </Fragment>
    );
};

export default Contact;