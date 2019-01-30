export const addBlogAsync = (blog) => {
    return {
        type: "ADD_BLOG_ASYNC",
        payload: blog
    }
}

export const addBlog = blog => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addBlogAsync(blog));
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
        setTimeout(() => {
            dispatch(updateBlogAsync(blog))
        }, 5000)
    }
}