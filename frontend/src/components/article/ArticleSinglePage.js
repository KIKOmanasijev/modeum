import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { getArticle } from '../../actions/articleActions';
import repo from '../../repository/axiosRepository';
import Comment from "../comment/Comment";
import CommentWrite from '../comment/CommentWrite';


class ArticleSinglePage extends Component {
    componentDidMount(){
        this.id = this.props.match.params.id;
        this.props.getArticle(this.id);
        repo.incViews(this.id);
    }
    
    submitComment = (data) => {
        repo.postComment(data);
        this.props.getArticle(this.id);
    }

    render() {
        let { singleArticle : article } = this.props;
        let comments = article.commentList;
        return (
            <Fragment>
                {
                (article !== undefined && article.author !== undefined) && 
                    <div className="container articleContainer">
                        <h1 className="singleArticleTitle">{article.title}</h1>
                        
                        <img src={article.imageUrl} className="singlePageThumbnail" alt="article main thumb"/>
                        
                        <div className="authorDetails">
                            <img src={article.author.imageUrl ? article.author.imageUrl : '/account.png'} className="singleArticleUserImg" alt="user profile"/>
                            <div>
                            <p>{article.author.fullName}</p>
                            <div className="stats">
                                <img className="singleArticleViewsIcon" src="/views.png" alt=""/> {article.views} views
                            </div>
                            </div>
                        </div>

                        <p className="singleArticleParagraph">{article.content}</p>

                        <div className="comments">
                            <h3>Comments:   </h3>
                            {
                                comments.map((comment) => (
                                    <Comment key={comment.id} content={comment.content} author={comment.author}/>
                                ))
                            }
                        <CommentWrite submitComment={this.submitComment} id={article.id} />
                        </div>
                    </div>}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    singleArticle: state.articles.singleArticle
})

export default connect(mapStateToProps, {getArticle})(ArticleSinglePage);