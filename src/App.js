import React, {Component} from 'react';

import './App.css';
import PodstronaGlowna from './components/PodstronaGlowna';
import Footer from './components/Footer'
import PostsList from './PostsList';

class App extends Component {
  
 
  
  
  render() {
  return (
    <div className="App">
      <PodstronaGlowna />
      <PostsList />    

      <Footer />

    </div>
  );
  }
}

export default App;
