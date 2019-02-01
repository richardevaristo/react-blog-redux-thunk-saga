import Axios from "axios";
import { v4 } from 'uuid';

function currentDate() {
    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    return date;
}

export const addBlogAsync = (blog) => {
    return {
        type: "ADD_BLOG_ASYNC",
        payload: blog
    }
}

export const addBlog = blog => {
    blog = {
        id: v4(),
        ...blog,
        created_at: currentDate()
    };
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            Axios.post('http://localhost:3000/blogs', blog)
            .then(res => dispatch(addBlogAsync(res.data)))
            .then(res => dispatch(DEFAULT()))
            .catch(err => console.log(err))
        }, 5000);
    }
}

export const updateBlogAsync = (blog) => {
    return {
        type: "UPDATE_BLOG_ASYNC",
        payload: blog
    }
}

export const updateBlog = blog => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            Axios.put(`http://localhost:3000/blogs/${blog.id}`, blog)
            .then(res => dispatch(updateBlogAsync(res.data)))
            .then(res => dispatch(DEFAULT()))
            .catch(err => console.log(err))
        }, 5000)
    }
}

export const deleteBlogAsync = blog => {
    return {
        type: "DELETE_BLOG_ASYNC",
        payload: blog
    }
}

export const deleteBlog = blog => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            Axios.delete(`http://localhost:3000/blogs/${blog}`)
            .then(res => dispatch(deleteBlogAsync(blog)))
            .then(res => dispatch(DEFAULT()))
            .catch(err => console.log(err))
        }, 5000);
    }
}

export const getBlogsAsync = (blogs) => {
    return {
        type: "GET_DATA_FULFILLED",
        payload: blogs
    }
}

export const getBlogs = () => {
    return dispatch => {
        Axios.get('http://localhost:3000/blogs').then(res => dispatch(getBlogsAsync(res.data)))
    }
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const DEFAULT = () => {
    return {
        type: "DEFAULT"
    }
}