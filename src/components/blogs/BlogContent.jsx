import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
const MONTHS =  [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
const convertDateFormat = (date) => {
    const d       = new Date(date);
    const newDate = `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    return newDate;
}

const BlogContent = ({ 
    id,
    content, 
    author, 
    date, 
    category,
    deleteEvent,
    process
}) => {
    return (
        <React.Fragment>
        <div className="card-content">
            <div className="content">
                {content}
            </div>
        </div>
        <div className="card-footer">
            <div className="card-footer-item">
                <button className="button is-white">
                    <p className="control">
                    <i className="fa fa-user"></i>
                    {' '} {author}
                    </p>
                </button>
                <button className="button is-white">
                    <p className="control">
                    <i className="fa fa-calendar"></i>
                    {' '} {convertDateFormat(date)}
                    </p>
                </button>
                <button className="button is-white">
                    <p className="control">
                    <i className="fa fa-list"></i>
                    {' '} {category}
                    </p>
                </button>
            </div>
            <div className="card-footer-item">
                <button className="button is-info">
                    <Link to={`/blog/edit/${id}`} className="has-text-white">
                    <p className="control">
                        <i className="fa fa-pencil"></i>
                        {' '} Edit
                    </p>
                    </Link>
                </button>
                <button className={classnames('button is-danger', {'is-loading':process.loading})} onClick={()=>deleteEvent(id)}>
                    <p className="control">
                        <i className="fa fa-times"></i>
                        {' '} Delete
                    </p>
                </button>
            </div>
        </div>
        </React.Fragment>
    )
}
export default BlogContent