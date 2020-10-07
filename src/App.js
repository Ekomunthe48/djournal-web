import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Home from './pages/home/home';
import Footer from './component/navbar/footer';
import Features from './pages/features/features';
import About from './pages/about_us/about';
import Term from './pages/term_condition/term';
import Contact from './pages/contact_us/contact';
import Faq from './pages/faq/faq';
import Blog from './pages/blog/blog';
import News from './pages/blog/content/news';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Redirect from='/Home' to='/' />

            <Route exact path='/Features' component={Features} />

            <Route exact path='/Blog' component={Blog} />
            
            <Route exact path='/About' component={About}/>
            <Redirect from='/About Us' to='/About' />

            <Route exact path='/Term' component={Term}/>
            <Redirect from='/Terms & Conditions' to='/Term' />

            <Route exact path='/Contact' component={Contact}/>
            <Redirect from='/Contact Us' to='/Contact' />

            <Route exact path='/FAQ' component={Faq}/>

            <Route exact path='/blog/news' component={News} />
          </Switch>
          <Footer />
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App;
