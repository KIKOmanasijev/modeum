import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createArticle2 } from '../../actions/articleActions';
import Swal from "sweetalert2";
import { Redirect } from 'react-router-dom';

class WriteArticle extends Component {
    state = {
        title: '',
        content: '',
        imageUrl: '',
        category: '',
        id: '',
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitArticle = () => {
        const { title, content, category, imageUrl } = this.state;
        const article = {
            title,
            content,
            imageUrl,
            category,
            id: this.props.user.id,
            category: "UX",
        }

        if (title === "" || content === "" || imageUrl === ""){
            Swal.fire({
                icon: 'warning',
                title: 'Some fields are empty, check again',
                showConfirmButton: false,
                timer: 2000
            })

        }

        else if (article.id !== ""){
            this.props.createArticle2(article);

            Swal.fire({
                icon: 'success',
                title: 'Your article has been created',
                showConfirmButton: false,
                timer: 2500,
                onClose: () => {
                    this.props.history.push("/");
                }
            })
        }
    
    }
    render() {
        return (
            <div className="container">
                <form>
                    <label htmlFor="title">Title:</label>
                    <input onChange={this.onChange} type="text" className="form-control mb-3" name="title" placeholder="Title" value={this.state.title}></input>
                
                    <label htmlFor="content">Content:</label>
                    <textarea onChange={this.onChange} className="form-control mb-3" name="content" placeholder="Content" rows="5" value={this.state.content}></textarea>
                
                    <label htmlFor="imageUrl">Thumbnail link:</label>
                    <input onChange={this.onChange} type="text" className="form-control mb-3" name="imageUrl" placeholder="URL Image" value={this.state.imageUrl}></input>

                    <label htmlFor="category">Choose a category:</label>

                    <select id="category" name="category" className="form-control" onChange={this.onChange}>
                        <option value="PROG">Programming General</option>
                        <option value="UX">User Experience</option>
                        <option value="WB">Web Development</option>
                        <option value="WD">Web Design</option>
                        <option value="INT">Interview</option>
                        <option value="CA">Career Advice</option>
                        <option value="INSP">Inspiration</option>
                        <option value="JS">Javasript</option>
                    </select>        
                    <br></br>
                    <input type="hidden" value={this.props.user !== null && this.props.user.id} name="id"></input>
                    <input type="hidden" value="" name="category"></input>

                    <button type="button" onClick={this.submitArticle} className="btn btn-primary">Submit article</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
  });

export default connect(mapStateToProps, {createArticle2})(WriteArticle);