import React, { Component } from 'react'
import BlogContent from './BlogContent'
class BlogItem extends Component {
    state = {
        isContentActive: false
    }

    toggleContent = () => 
        this.setState({
            isContentActive: !this.state.isContentActive
        })

    render() {
        const { id, title, content, author, created_at, category } = this.props.blog
        return (
            <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-title">
                        {title}
                    </div>
                    <div className="card-header-icon">
                        <span className="icon">
                        <i 
                            className="fa fa-angle-down"
                            onClick={this.toggleContent}
                            ></i>
                        </span>
                    </div>
                </div>
                {
                    this.state.isContentActive && 
                    <BlogContent 
                        id          = {id}
                        content     = {content}
                        author      = {author}
                        date        = {created_at}
                        category    = {category}
                        deleteEvent = {this.props.delete}
                        process     = {this.props.process}
                    />
                }
            </div>
        </React.Fragment>
        )
    }
}
export default BlogItem