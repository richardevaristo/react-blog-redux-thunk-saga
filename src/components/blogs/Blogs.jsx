import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BlogItem from './BlogItem'
import { addBlog, deleteBlog, getBlogs } from '../../app/actions/blogActions';

class Blogs extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const { blogs } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="box">
            <h1 className="title">Blogs</h1>
            <Link className="button is-primary is-small" to="/blog/create">
              <p>
                <i className="fa fa-plus"></i>
                Blog
              </p>
            </Link>
            
            {
              blogs.map(blog =>
                <BlogItem 
                  key     = {blog.id}
                  blog    = {blog}
                  delete  = {this.props.delete}
                  process = {this.props.process}
                />
              )
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogReducer.blogs,
    selectedBlog: state.blogReducer.blog,
    process: state.blogReducer.process
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: blog => {
      dispatch(addBlog(blog))
    },
    delete: blog => {
      dispatch(deleteBlog(blog))
    },
    fetch: () => {
      dispatch(getBlogs())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blogs)