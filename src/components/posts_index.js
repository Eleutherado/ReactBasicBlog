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
      return this.props.posts.map((post) =>
          <div key={post.id}
            className="collection-item card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title"><strong>{post.title}</strong></span>
              <p className="truncate">{post.content}</p>
            </div>
            <div className="card-action">
              <Link to={"posts/" + post.id}>Read
                <span className="new badge" data-badge-caption={post.categories} />
                <i className="right small material-icons">send</i>
              </Link>
            </div>
          </div>
      );
    }

    render() {
        return(
            <div>
                <div className="right-align">
                    <Link to="/posts/new" className="waves-effect waves-light btn">Add a Post</Link>
                </div>
                <div className="collection with-header flow-text">
                  <h1 className="collection-header center-align"><i className="large material-icons">library_books</i>&emsp; View Blog Posts</h1>
                  {this.renderPosts()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return { posts: state.posts.allPosts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
