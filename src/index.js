import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Autor from './routes/Autor'
import Kontakt from './routes/Kontakt'
import Post from './routes/Post'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NoWebsite from './routes/NoWebsite';


ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/autor" component={Autor} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/post/:id" component={Post} />      
      <Route path="/404" component={NoWebsite} />       
      <Route component={NoWebsite} />
       
    </Switch>
    
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
