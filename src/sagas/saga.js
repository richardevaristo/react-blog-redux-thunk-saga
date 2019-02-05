import { takeLatest, put } from 'redux-saga/effects'

function* getBlogAsync(blog) {
    yield put({
            type: "SHOW_BLOG_ASYNC",
            payload: blog.payload
        })
}


export function* watchGetBlog() {
    yield takeLatest('SHOW_BLOG', getBlogAsync);
}