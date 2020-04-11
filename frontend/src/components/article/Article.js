import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  getItemsByAuthor,
  deleteArticle,
  getItems,
} from "../../actions/articleActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class Article extends Component {
  constructor(props) {
    super(props);
    this.deleteThisArticle = this.deleteThisArticle.bind(this);
  }

  deleteThisArticle(id, author) {
    Swal.fire({
      icon: "warning",
      title: "Article is about to be deleten",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        this.props.deleteArticle(id);
        this.props.getItemsByAuthor(author.id);
        window.location.reload();
      }
    });
  }
  render() {
    let { title, content, author, imageUrl, id } = this.props.article;
    return (
      <div className="singleArticle mb-5">
        {this.props.article && (
          <Fragment>
            <img
              className="img-rounded"
              src={imageUrl != null ? imageUrl : "/logo192.png"}
              alt="post thumbnail"
            />
            <div>
              <Link to={`/articles/${id}`}>
                <h2>{title}</h2>
                <p>
                  {content.substring(0, 150)}
                  {content.length > 150 && "..."}
                </p>
              </Link>
              {this.props.ownership && (
                <Fragment>
                  <Link to={`/edit/${id}`}>
                    <button className="btn btn-primary mr-2">Edit</button>
                  </Link>
                  <button
                    onClick={() => {
                      this.deleteThisArticle(id, author);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </Fragment>
              )}
              {!this.props.ownership && (
                <p className="singleArticleAuthorName">
                  Author: {author != null ? author.fullName : "Unknown"}
                </p>
              )}
            </div>
          </Fragment>
        )}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
});
export default connect(mapStateToProps, {
  getItems,
  getItemsByAuthor,
  deleteArticle,
})(Article);
