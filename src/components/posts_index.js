import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
/*Link is a react component, the 'to' prop contains the path that you wish to
link to
*/

class PostsIndex extends Component {
    componentWillMount(){
        //is called once when component is rendered for the first time
        // ideal place to create action to fetch data
        this.props.fetchPosts();
    }
    renderPosts() {
        return(
            <div className="collection with-header flow-text">
                <h1 className="collection-header"><i className="large material-icons">library_books</i>&emsp; View Blog Posts</h1>
                <a href="#!" className="collection-item"><i className="material-icons">send</i>&emsp;&emsp; Post 1</a>
            </div>
        );
    }
    render() {
        return(
            <div>
                <div className="right-align">
                    <Link to="/posts/new" className="waves-effect waves-light btn">
                        Add a Post
                    </Link>
                </div>
                {this.renderPosts()}
            </div>
        );
    }
}


export default connect(null, { fetchPosts })(PostsIndex);
