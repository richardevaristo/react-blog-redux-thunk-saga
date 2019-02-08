import React, { Component } from 'react'
import TextInput from '../layouts/TextInput'
import TextArea from '../layouts/TextArea'
import Select from '../layouts/Select'
import { Redirect } from 'react-router-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { addBlog } from '../../app/actions/blogActions';

class CreateBlog extends Component {
    
    submitForm = (e) => {
        e.preventDefault();
        
        this.props.add(this.state);
    }

    onChangeEventHandler = (e) => 
        this.setState({[e.target.name]: e.target.value});
    
    cancel = (e) => this.props.history.push("/");
    
    render() {
        return (
            <React.Fragment>
            <div className="box">
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <h2 className="title is-2 has-text-centered">Add Blog</h2>
                        <form onSubmit={this.submitForm}>
                        <TextInput 
                            label       = "Title"
                            name        = "title"
                            changeEvent = {this.onChangeEventHandler}
                            placeholder = 'Enter Title...'
                        />
                        <TextInput 
                            label       = "Author"
                            name        = "author"
                            changeEvent = {this.onChangeEventHandler}
                            placeholder = 'Enter Author...'
                        />
                        <Select 
                            label       = "Category"
                            name        = "category"
                            changeEvent = {this.onChangeEventHandler}
                            options     = {this.props.options}
                        />
                        <TextArea 
                            label       = "Content"
                            name        = "content"
                            changeEvent = {this.onChangeEventHandler}
                            placeholder = "Enter your blog content here..."
                        />
                        <div className="buttons is-pulled-right">
                            <button type="button" className="button" onClick={this.cancel}>Cancel</button>
                            <button type="submit" className={classnames('button is-primary', {'is-loading': this.props.process.loading})}>
                                Save
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
                {
                    this.props.process.success && <Redirect to="/" />
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
        add: blog => {
            dispatch(addBlog(blog))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)