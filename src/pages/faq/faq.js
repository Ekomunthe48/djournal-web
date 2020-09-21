import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accorHead: {
        marginTop: theme.spacing(1)
    },
    color: {
        backgroundColor: '#0d6759',
        color: '#ffffff'
    },
    icon: {
        color: '#ffffff'
    }
}));

const Faq = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <h1>FAQ</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, eaque a! Modi assumenda blanditiis ducimus officiis voluptatibus distinctio!
                Reiciendis magnam porro eius repellendus, consequuntur cum rem quod asperiores nemo eligendi.
                </p>
                <Container className={classes.accorHead}>
                    <Accordion>
                        <AccordionSummary
                            className={classes.color}
                            expandIcon={<ExpandMoreIcon className={classes.icon} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Apa itu Djurnal ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            className={classes.color}
                            expandIcon={<ExpandMoreIcon className={classes.icon} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Apa yang akan saya dapatkan ketika bergabung dengan Djurnal?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Container>
        </div>
    );
};

export default Faq;