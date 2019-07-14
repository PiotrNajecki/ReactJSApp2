import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';

class Post extends Component {
 
 
  state = {
    post: null
  };


  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};



  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          post: data
        })
      );
  }

  render() {
    return (
      <div>
        
        <br />

        {this.state.post ? (
          <div>
            <div><b>Post nr {this.state.post.id}</b></div>
            <div><b>Tytuł:</b> {this.state.post.title}</div>
            <div><b>Tresc:</b> {this.state.post.body}</div>
          </div>
        ) : null}

        <br />
       
      </div>
    );
  }
}

export default Post;