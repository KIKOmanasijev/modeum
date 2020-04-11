import React, { Component } from "react";
import Article from "../article/Article";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getItems } from "../../actions/articleActions";
import CategoryList from "../category/CategoryList";

class HomePage extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  findTopViewed() {
    let articles = this.props.articles.articles;
    let top = articles[0];
    articles.forEach((article) => {
      if (article.views > top.views) {
        top = article;
      }
    });

    return top;
  }

  render() {
    let { articles } = this.props.articles;
    let top = this.findTopViewed();
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9 mt-3">
            {articles &&
              articles.map((article) => (
                <Article key={article.id} article={article} />
              ))}
          </div>
          <div className="col-md-3">
            <h2 className="my-3">Top article</h2>
            {top && (
              <Link to={`/articles/${top.id}`}>
                <div className="topviewed">
                  <img src={top.imageUrl} alt="top viewed article" />
                  <p className="topviewedTitle mt-3 text-bold">{top.title}</p>
                </div>
              </Link>
            )}

            <CategoryList/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
});
export default connect(mapStateToProps, { getItems })(HomePage);
