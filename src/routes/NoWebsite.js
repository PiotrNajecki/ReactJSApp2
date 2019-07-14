import React from "react";
import { Component } from "react";
import { Redirect } from "react-router-dom";

class NoWebsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false
    };
  }
  
  componentDidMount() {
    this.setRedirect();
  }

  setRedirect() {
    setTimeout(() => {
      this.setState({
        isRedirect: true
      });    
    }, 4000);
  }

  render() {
    this.setRedirect();
    return this.state.isRedirect ? (
      <Redirect from="/404" to="/" />
    ) : (
      <div>      
        <h1>błąd 404</h1>
      </div>
    );
  }
}

export default NoWebsite;