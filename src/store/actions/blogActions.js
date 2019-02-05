import Axios from "axios";

const BASE_URI = 'http://localhost:8080';
function currentDate() {
    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    return date;
}

export const addBlogAsync = (blog) => {
    return {
        type: "ADD_BLOG",
        payload: blog
    }
}

export const addBlog = blog => dispatch => {
    blog = {
        ...blog,
        created_at: currentDate()
    };
    dispatch(loading())
    Axios.post(`${BASE_URI}/blogs`, blog)
    .then(res => dispatch(addBlogAsync(res.data)))
    .then(() => dispatch(DEFAULTDATA()))
    .catch(err => console.log(err))
}

export const updateBlogAsync = (blog) => {
    return {
        type: "UPDATE_BLOG",
        payload: blog
    }
}

export const updateBlog = blog => dispatch => {
    dispatch(loading())
    Axios.put(`${BASE_URI}/blogs/${blog.id}`, blog)
    .then(res => dispatch(updateBlogAsync(res.data)))
    .then(() => dispatch(DEFAULTDATA()))
    .catch(err => console.log(err))
}

export const deleteBlogAsync = blog => {
    return {
        type: "DELETE_BLOG",
        payload: blog
    }
}

export const deleteBlog = blog => dispatch =>{
    dispatch(loading())
    Axios.delete(`${BASE_URI}/blogs/${blog}`)
    .then(res => dispatch(deleteBlogAsync(blog)))
    .then(res => dispatch(DEFAULTDATA()))
    .catch(err => console.log(err))
}

export const getBlogsAsync = (blogs) => {
    return {
        type: "GET_DATA_FULFILLED",
        payload: blogs
    }
}
export const getBlogAsync = blog => {
    return {
        type: "SHOW_BLOG",
        payload: blog
    }
}
export const getBlog = id => dispatch =>{
    Axios.get(`${BASE_URI}/blogs/${id}`)
    .then(res => dispatch(getBlogAsync(res.data)));
}

export const getBlogs = () => dispatch => {
    Axios.get(`${BASE_URI}/blogs`).then(res => dispatch(getBlogsAsync(res.data)))
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const DEFAULTDATA = () => {
    return {
        type: "DATA_DEFAULT"
    }
}