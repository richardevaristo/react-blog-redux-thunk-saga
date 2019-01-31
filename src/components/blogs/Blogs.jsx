import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BlogItem from './BlogItem'

class Blogs extends Component {
  render() {
    const { blogs } = this.props.blogs;
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
                  key  = {blog.id}
                  blog = {blog}
                  delete = {this.props.delete}
                  edit = {this.props.edit}
                />
              )
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Blogs