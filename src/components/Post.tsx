import React, { Component } from "react";
import { connect } from "react-redux";

export interface Props {
  history: any;
  post: any;
}

class Post extends Component<Props> {
  handleClick = () => {
    this.props.history.push("/");
  };
  render() {
    const post = this.props.post ? (
      <div className="post">
        <div>
          <h5>{this.props.post.body}</h5>
        </div>
        <div className="center">
          <button className="btn black" onClick={this.handleClick}>
            Back
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (
  state: { posts: any[] },
  ownProps: { match: { params: { post_id: any } } }
) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post: { id: any }) => post.id === id)
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; id: any }) => any
) => {
  return {
    deletePost: (id: any) => dispatch({ type: "DELETE_POST", id: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
