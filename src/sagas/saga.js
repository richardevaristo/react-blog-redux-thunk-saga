import { takeLatest, put } from 'redux-saga/effects'
import { GET_BLOGS, GET_BLOGS_A, SHOW_BLOG_A, SHOW_BLOG, DELETE_BLOG, DELETE_BLOG_A, ADD_BLOG, ADD_BLOG_A, UPDATE_BLOG_A, UPDATE_BLOG } from '../app/actions/types';

function* getBlogAsync(blog) {
    yield put({
            type: SHOW_BLOG_A,
            payload: blog.payload
        })
}

export function* watchGetBlog() {
    yield takeLatest(SHOW_BLOG, getBlogAsync);
}

function* getBlogsAsync(blogs) {
    yield put({ 
        type: GET_BLOGS_A, 
        payload: blogs.payload 
    })
}

export function* watchGetBlogs() {
    yield takeLatest(GET_BLOGS, getBlogsAsync);
}

function* deleteBlogAsync(blog) {
    yield put({
        type: DELETE_BLOG_A,
        payload: blog.payload
    })
}

export function* watchDeleteBlog() {
    yield takeLatest(DELETE_BLOG, deleteBlogAsync)
}

function* addBlogAsync(blog) {
    yield put({
        type: ADD_BLOG_A,
        payload: blog.payload
    })
}

export function* watchAddBlog() {
    yield takeLatest(ADD_BLOG, addBlogAsync)
}

function* updateBlogAsync(blog) {
    yield put({
        type: UPDATE_BLOG_A,
        payload: blog.payload
    })
}

export function* watchUpdateBlog() {
    yield takeLatest(UPDATE_BLOG, updateBlogAsync)
}