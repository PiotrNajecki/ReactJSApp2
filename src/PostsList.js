

import React, {Component} from 'react';
import './App.css';

import PostsListView from './PostsListView';

class PostsList extends Component {


 state = {
    count: 0,
    postsListVariable: [],
   
  };  


    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data =>
          this.setState({
            postsListVariable: data
          })
        );
    }

    render() {
        return (              
            <PostsListView listVariable={this.state.postsListVariable}/>              
               
        );
    }

}       



  export default PostsList      