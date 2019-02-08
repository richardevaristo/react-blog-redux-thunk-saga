import {
    takeLatest,
    put
} from 'redux-saga/effects'
import {
    GET_BLOGS,
    GET_BLOGS_A,
    SHOW_BLOG_A,
    SHOW_BLOG,
    DELETE_BLOG,
    DELETE_BLOG_A,
    ADD_BLOG,
    ADD_BLOG_A,
    UPDATE_BLOG_A,
    UPDATE_BLOG
} from '../app/actions/types';

export default function* watchActions() {
    yield takeLatest(SHOW_BLOG, actionWatched)
    yield takeLatest(GET_BLOGS, actionWatched)
    yield takeLatest(DELETE_BLOG, actionWatched)
    yield takeLatest(ADD_BLOG, actionWatched)
    yield takeLatest(UPDATE_BLOG, actionWatched)
}

function* actionWatched(action) {
    switch (action.type) {
        case SHOW_BLOG:
            yield put({
                type: SHOW_BLOG_A,
                payload: action.payload
            })
            break;
        case GET_BLOGS:
            yield put({
                type: GET_BLOGS_A,
                payload: action.payload
            })
            break;
        case ADD_BLOG:
            yield put({
                type: ADD_BLOG_A,
                payload: action.payload
            })
            break;
        case DELETE_BLOG:
            yield put({
                type: DELETE_BLOG_A,
                payload: action.payload
            })
            break;
        case UPDATE_BLOG:
            yield put({
                type: UPDATE_BLOG_A,
                payload: action.payload
            })
            break;
        default:
            break;
    }
}
