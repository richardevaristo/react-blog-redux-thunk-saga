import React, { Component } from 'react'
import TextInput from '../layouts/TextInput'
import TextArea from '../layouts/TextArea'
import Select from '../layouts/Select'
import { connect } from 'react-redux'
import { updateBlog, getBlog } from '../../store/actions/blogActions'
import classnames from 'classnames'
import { Redirect } from 'react-router-dom'
class EditBlog extends Component {

    state = {
        id: '',
        title   : '',
        author  : '',
        category: '',
        content : '',
    }

    componentWillReceiveProps(nextProps, nextState){
        this.setState(nextProps.blog);
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.show(id);
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.update(this.state);
    }

    onChangeEventHandler = (e) => 
        this.setState({[e.target.name]: e.target.value});

    cancel = (e) => this.props.history.push("/");
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
                            value       = {title || ''}
                        />
                        <TextInput 
                            label       = "Author"
                            name        = "author"
                            changeEvent = {this.onChangeEventHandler}
                            placeholder = 'Enter Author...'
                            value       = {author || ''}
                        />
                        <Select 
                            label        = "Category"
                            name         = "category"
                            changeEvent  = {this.onChangeEventHandler}
                            options      = {this.props.options}
                            defaultValue = {category || ''}
                        />
                        <TextArea 
                            label       = "Content"
                            name        = "content"
                            changeEvent = {this.onChangeEventHandler}
                            placeholder = "Enter your blog content here..."
                            value       = {content || ''}
                        />
                        <div className="buttons is-pulled-right">
                            <button type="button" className="button" onClick={this.cancel}>Cancel</button>
                            <button type="submit" className={classnames('button is-primary', {
                                'is-loading': this.props.process.loading
                            })}>
                                Update
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
                {
                    this.props.process.success && <Redirect to='/' />
                }
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        blog: state.blogReducer.blog,
        options: state.blogReducer.categoryOptions,
        process: state.blogReducer.process
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: blog => {
            dispatch(updateBlog(blog))
        },
        show: (id) => {
            dispatch(getBlog(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog)