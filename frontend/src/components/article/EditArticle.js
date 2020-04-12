import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getArticle,
  editArticle,
  saveEdit,
} from "../../actions/articleActions";
import Swal from "sweetalert2";

class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getArticle(id);
  }

  handleChange(e) {
    let id = this.props.match.params.id;
    let title = document.getElementsByName("title")[0].value;
    let content = document.getElementsByName("content")[0].value;
    let category = document.getElementsByName("category")[0].value;

    this.props.editArticle(id, {
      singleArticle: {
        title,
        content,
        category
      },
    });
  }

  saveEdit(e) {
    e.preventDefault();
    e.stopPropagation();

    let id = this.props.match.params.id;
    this.props.saveEdit(id, JSON.stringify(this.props.singleArticle));

    Swal.fire({
      icon: "success",
      title: "Your article has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  render() {
    return (
      <div className="container editForm">
        {this.props.singleArticle && (
          <Fragment>
            <form>
              <label htmlFor="title">Title</label>
              <input
                onChange={this.handleChange}
                name="title"
                type="text"
                className="form-control mb-3"
                value={this.props.singleArticle.title}
              />

              <label htmlFor="content">Content:</label>
              <textarea
                onChange={this.handleChange}
                rows={5}
                name="content"
                type="textarea"
                className="form-control"
                value={this.props.singleArticle.content}
              />

              <label htmlFor="category">Choose a category:</label>

              <select
                id="category"
                name="category"
                className="form-control"
                onChange={this.handleChange}
              >
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
              <button className="btn btn-primary mt-3" onClick={this.saveEdit}>
                Save
              </button>
            </form>
          </Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  singleArticle: state.articles.singleArticle,
});
export default connect(mapStateToProps, { getArticle, editArticle, saveEdit })(
  EditArticle
);
