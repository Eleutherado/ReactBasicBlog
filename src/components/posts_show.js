import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { viewPost, deletePost } from "../actions/index";
import { Link } from "react-router";

class PostsShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    //why does this.props contain deletePost and viewPost???
    this.props.viewPost(this.props.params.id)
  }

  handleDeleteClick(id) {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push("/");
      });
  }

  render(){

    const { story } = this.props;

    if(!story){
      return <div>loading...</div>

    }
    return(
      <div>
        <Link to="/" className=" waves-effect waves-light btn">Back to index</Link>
        <button
          className="right waves-effect waves-light red darken-3 btn"
          onClick={this.handleDeleteClick.bind(this)}>Delete</button>
        <h2 className="center-align light-blue-text text-darken-4">{story.title}</h2>
        <h6 className="left-align">Categories: {story.categories}</h6>
        <p className="blue-grey-text text-darken-1">{story.content}</p>
      </div>
    );
  }

}

function mapStateToProps(state){
  //using the name story to illustrate which part of the state corresponds
  // to this.props vs state.props (!=)
  return { story: state.posts.post }
}
// {mapDispatchToProps}
export default connect(mapStateToProps, {viewPost, deletePost})(PostsShow);
