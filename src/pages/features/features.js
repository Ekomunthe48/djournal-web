import React, { useState } from 'react';
import { Container, makeStyles, useTheme, Paper, Tabs, Tab, Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'

import GavelIcon from '@material-ui/icons/Gavel';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import One from './tab_panel/one'
import Two from './tab_panel/two'
import Three from './tab_panel/three'
import Four from './tab_panel/four'
import Five from './tab_panel/five'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={5}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,

}

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        boxShadow: 'none',
        textAlign: 'justify'
    }
}))

const Features = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <Container>
                <div>
                    <h1>Features</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum, eaque a! Modi assumenda blanditiis ducimus officiis voluptatibus distinctio!
                        Reiciendis magnam porro eius repellendus, consequuntur cum rem quod asperiores nemo eligendi.
                    </p>
                </div>
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="on"
                    >
                        <Tab icon={<GavelIcon />} label="Sesuai Peraturan" {...a11yProps(0)} />
                        <Tab icon={<SentimentVerySatisfiedIcon />} label="Ramah Pengguna" {...a11yProps(1)} />
                        <Tab icon={<MonetizationOnIcon />} label="Otomatisasi Transaksi" {...a11yProps(2)} />
                        <Tab icon={<AssessmentIcon />} label="Pelaporan Realtime" {...a11yProps(3)} />
                        <Tab icon={<LocationCityIcon />} label="Jenis Usaha Lengkap" {...a11yProps(4)} />
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <One />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Two />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <Three />
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <Four />
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            <Five />
                        </TabPanel>
                    </SwipeableViews>
                </Paper>
            </Container>

        </div>
    );
};

export default Features;