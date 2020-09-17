import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Home from './pages/home/home';
import Footer from './component/navbar/footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Redirect from='/Home' to='/' />
          <Route exact path='/' component={Home} />
          <Route exact path='/Features' component={Home} />
          <Route exact path='/About us' component={Home} />
        </Switch>
        <Footer />
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App;
