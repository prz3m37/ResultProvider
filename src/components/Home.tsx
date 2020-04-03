import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

interface Props {
  posts: any;
}

class Home extends Component<Props> {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(
        (post: {
          id: string | number;
          img: string | undefined;
          title: React.ReactNode;
          body: React.ReactNode;
        }) => {
          return (
            <div className="post card" key={post.id}>
              <img src={post.img} alt="A Python" />
              <div className="card-content">
                <Link to={"/projects/" + post.id}>
                  <span className="card-title black-text">{post.title}</span>
                </Link>
              </div>
            </div>
          );
        }
      )
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Projects</h4>
          {postList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: { posts: any }) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
