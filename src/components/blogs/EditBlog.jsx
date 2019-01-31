import React, { Component } from 'react'
import TextInput from '../layouts/TextInput'
import TextArea from '../layouts/TextArea'
import Select from '../layouts/Select'
import { connect } from 'react-redux';

class EditBlog extends Component {

    state = {
        title: this.props.blog ? this.props.blog.title : '',
        author: this.props.blog ? this.props.blog.author : '',
        category: this.props.blog ? this.props.blog.category : '',
        content: this.props.blog ? this.props.blog.content : '',
    }

    componentDidMount() {
        if(this.props.match.params.id) {

        }
    }
    submitForm = (e) => {
        e.preventDefault();
    }

    onChangeEventHandler = (e) => {
        if(e.target.name === 'title'){
            const textToSlug = e.target.value.trim();
            this.setState({slug: textToSlug.toLowerCase().replace(/\s/g, '-')});
        }

        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { title, author, category, content } = this.state
        return (
            <React.Fragment>
            <div className="box">
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <h2 className="title is-2 has-text-centered">Edit Blog</h2>
                        <form onSubmit={this.submitForm}>
                        <TextInput 
                            label       = "Title"
                            name        = "title"
                            changeEvent = {this.onChangeEventHandler}
                            placeholder = 'Enter Title...'
                            value = {title}
                        />
                        <TextInput 
                            label       = "Author"
                            name        = "author"
                            changeEvent = {this.onChangeEventHandler}
                            placeholder = 'Enter Author...'
                            value={author}
                        />
                        <Select 
                            label       = "Category"
                            name        = "category"
                            changeEvent = {this.onChangeEventHandler}
                            options     = {this.props.options}
                            value = {category}
                        />
                        <TextArea 
                            label       = "Content"
                            name        = "content"
                            changeEvent = {this.onChangeEventHandler}
                            placeholder = "Enter your blog content here..."
                            value = {content}
                        />
                        <div className="buttons is-pulled-right">
                            <button type="button" className="button">Cancel</button>
                            <button type="submit" className="button is-primary">
                                Update
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
// export default EditBlog
const mapStateToProps = (state, props) => {
    const { match } = props;
    if(match.params.id){
        return {
            blog: state.blogReducer.blogs.find(blog => blog.id === match.params.id),
            options: state.blogReducer.categoryOptions
        }
    }
    return {blog: null}
}

export default connect(mapStateToProps)(EditBlog)