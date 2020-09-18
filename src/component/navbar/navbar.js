import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom"
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Drawer, IconButton, Button, List, ListItem, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from '../../src/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1
  },
  nav: {
    boxShadow: 'none'
  },
  title: {
    flexGrow: 1
  },
  logo: {
    maxWidth: 40,
    Height: 40,
    marginTop: 1
  },
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  fullList: {
    width: 'auto',
  },
  listColor: {
    color: '#0d6759',
    textDecoration: 'none',
    '&:hover': {
      color: "#479586",

    },
  },
  textList: {
    textAlign: 'center',
  },
  Navi: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
            display: 'none'
    },
    '&:hover': {
      color: "#479586",

    },
  }
}))

const Navbar = () => {
  const classes = useStyles()
  const [state, setState] = useState(false)

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
      <List >
        {['Home', 'Features', 'About Us'].map((text) => (
          <Link to={`/${text}`} className={classes.listColor}>
            <ListItem button key={text}>
              <ListItemText primary={text} className={classes.textList} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img className={classes.logo} src={Logo} alt="Djournal Logo" />
          </Typography>
          <div>
            {['right'].map((anchor) => (
              <Fragment className={classes.listColor} key={anchor}>
              {['Home', 'Features', 'About Us'].map((text) => (
                    <Link to={`/${text}`} className={classes.listColor}>
                      <Button color="primary" primary={text} className={classes.Navi} >{text}</Button>
                    </Link>
                  ))}
                <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </Fragment>
            ))
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>

  )
};

export default Navbar;