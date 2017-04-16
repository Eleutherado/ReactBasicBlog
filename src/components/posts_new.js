import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // new Component Field
import { createPost } from "../actions/index";
//import { connect } from "react-redux";

class PostsNew extends Component {
  /* redux-form v6
  render() {

     const { handleSubmit } = this.props;

     const renderInput = (field) =>
        <div>
          <input {...field.input} className={field.className} type={field.type}/>
          {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        </div>
      return (
          <form onSubmit={handleSubmit(this.props.createPost)}>
              <h3>Share Your Story</h3>
              <div className="input-field">
                  <label>Title</label>
                  <Field
                    type="text"
                    name="Title"
                    props={{className : "validate"}}
                    component={renderInput} />
              </div>

              <div className="input-field">
                  <label>Categories</label>
                  <Field
                    type="text"
                    name="Categories"
                    props={{className : "validate"}}
                    component={renderInput}/>
              </div>

              <div className="input-field">
                  <label>Content</label>
                  <Field
                    type="textarea"
                    name="Content"
                    props={{className : "validate"}}
                    component={renderInput} />
              </div>
              <button type="submit" className="validate btn">Post</button>
          </form>
      );
  }
  */

    render() {
      /* redux-form v4 */
        const { fields:{ title, categories, content },handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Share Your Story</h3>
                <div className="input-field">
                    <label>Title</label>
                    <input
                      type="text"
                      className="validate" {...title} />
                    <div className="red-text text-darken-3">
                      {title.touched ? title.error : ""}
                    </div>
                </div>

                <div className="input-field">
                    <label>Categories</label>
                    <input
                      type="text"
                      className= "validate"
                      {...categories}/>
                </div>

                <div className="input-field">
                    <label>Content</label>
                    <textarea
                      className= "validate"
                      {...content} />
                </div>
                <button type="submit" className="validate btn">Post</button>
            </form>
        );
    }
}

function validate(values){
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd mapDispatchToProps

export default reduxForm({
    form: 'NewPostForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);
