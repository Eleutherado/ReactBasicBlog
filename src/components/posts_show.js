import React, { Component } from "react";
import { connect } from "react-redux";
import { viewPost } from "../actions/index";

class PostsShow extends Component {

  componentWillMount(){
    this.props.viewPost(this.props.params.id)
  }
  render(){

    const { story } = this.props;

    if(!story){
      return <div>loading...</div>

    }
    return(
      <div>
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

export default connect(mapStateToProps, {viewPost})(PostsShow);
