import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount(){
        //is called once when component is rendered for the first time
        // ideal place to create action to fetch data
        this.props.fetchPosts();
    }

    render() {
        return(
            <div className="collection with-header flow-text">
                <h1 className="collection-header"><i className="large material-icons">library_books</i>&emsp; View Blog Posts</h1>
                <a href="#!" className="collection-item"><i className="material-icons">send</i>&emsp;&emsp; Post 1</a>
            </div>
        );
    }
}


export default connect(null, { fetchPosts })(PostsIndex);
