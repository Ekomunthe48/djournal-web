import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App;
