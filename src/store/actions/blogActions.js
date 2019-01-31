export const addBlogAsync = (blog) => {
    return {
        type: "ADD_BLOG_ASYNC",
        payload: blog
    }
}

export const addBlog = blog => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(addBlogAsync(blog));
            dispatch(DEFAULT())
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

export const deleteBlogAsync = blog => {
    return {
        type: "DELETE_BLOG_ASYNC",
        payload: blog
    }
}

export const deleteBlog = blog => {
    return dispatch => {
        setTimeout(() => {
            dispatch(deleteBlogAsync(blog))
        }, 5000);
    }
}

export const editBlogAsync = blog => {
    return {
        type: "SHOW_BLOG_ASYNC",
        payload: blog
    }
}

export const editBlog = blog => {
    return dispatch => {
        setTimeout(() => {
            dispatch(editBlogAsync(blog))
        }, 5000);
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