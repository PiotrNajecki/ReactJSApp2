import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'



class PostsListView extends Component {

    static propTypes = {
        listVariable: PropTypes.array.isRequired
    }

     render() {
        return (     
            <div>
            {this.props.listVariable.map((item, indeks) => (
                <div key={indeks}>
                <Link to={`/post/${item.id}`}>Post {indeks+1}: </Link>
                </div>))}                
            </div>                     
        );        

    }      
} 


export default PostsListView



  