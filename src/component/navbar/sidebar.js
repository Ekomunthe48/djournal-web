import React, { useState } from 'react';
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    fullList: {
        width: 'auto',
    },
}))

const Sidebar = () => {
    const classes = useStyles()
    const [state, setState] = useState(
        {
            right: false
        }
    )

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Features', 'About Us'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return ( (anchor) => (
        <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
        </React.Fragment>
        )
    )
};

export default Sidebar;