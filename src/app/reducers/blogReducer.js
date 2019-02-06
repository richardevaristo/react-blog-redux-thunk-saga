import { DATA_DEFAULT, GET_BLOGS_A, SHOW_BLOG_A, ADD_BLOG_A, UPDATE_BLOG_A, LOADING, DELETE_BLOG_A } from '../actions/types';
const initialState = {
    blogs: [],
    blog:{},
    categoryOptions: [
      'Food', 'Travel', 'Photography', 'Education', 'Business', 'Politics'
    ],
    process: {
      loading: false,
      success: false
    }
}

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
      case DATA_DEFAULT:
        return {
          ...state,
          process: {
            success: !state.process.success
          }
        }
      case GET_BLOGS_A:
        return {
          ...state,
          blogs: action.payload
        }
      case SHOW_BLOG_A: 
        return {
          ...state,
          blog: action.payload
        }
      case LOADING:
        return {
          ...state,
          process: {
            loading: !state.process.loading
          }
        }
      case ADD_BLOG_A:
        return {
            ...state,
            blogs: [{...action.payload}, ...state.blogs],
            process: {
              loading: !state.process.loading,
              success: !state.process.success
            }
        }
      case UPDATE_BLOG_A:
        return {
            ...state,
            blogs: state.blogs.map(blog => blog.id === action.payload.id ? action.payload : blog),
            process: {
              loading: !state.process.loading,
              success: !state.process.success
            }
        }
      case DELETE_BLOG_A:
        return {
            ...state,
            blogs: state.blogs.filter(blog => blog.id !== action.payload),
            process: {
              loading: !state.process.loading,
              success: !state.process.success
            }
        }
      default:
        return state
  }
}

export default blogReducer