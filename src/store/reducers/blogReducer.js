import { v4 } from 'uuid';

const initialState = {
    blogs: [
        {
          id        : v4(),
          slug      : 'blog-post-1',
          title     : 'Blog Post 1',
          content   : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus reiciendis accusantium ullam ad at, delectus alias nemo exercitationem sunt rem omnis facilis neque, architecto nostrum quibusdam? Sint harum incidunt voluptatibus!',
          author    : 'John Doe',
          category  : 'Travel',
          created_at: '2019-01-20',
          updated_at: ''
        },
        {
          id        : v4(),
          slug      : 'blog-post-2',
          title     : 'Blog Post 2',
          content   : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus reiciendis accusantium ullam ad at, delectus alias nemo exercitationem sunt rem omnis facilis neque, architecto nostrum quibusdam? Sint harum incidunt voluptatibus!',
          author    : 'Jane Smith',
          category  : 'Travel',
          created_at: '2019-02-03',
          updated_at: ''
        },
        {
          id        : v4(),
          slug      : 'blog-post-3',
          title     : 'Blog Post 3',
          content   : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus reiciendis accusantium ullam ad at, delectus alias nemo exercitationem sunt rem omnis facilis neque, architecto nostrum quibusdam? Sint harum incidunt voluptatibus!',
          author    : 'John Doe',
          category  : 'Travel',
          created_at: '2019-04-01',
          updated_at: ''
        }
    ],
    blog: {}
}

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
      case "ADD_BLOG_ASYNC":
        return {
            ...state,
            blogs: [action.payload, ...state]
        }
      case "SHOW_BLOG_ASYNC":
        return {
            ...state,
            blog: state.blogs.map(blog => blog.id === action.payload && blog)
        }
      case "UPDATE_BLOG_ASYNC":
        return {
            ...state,
            blogs: state.blogs.map(blog => blog.id === action.payload.id ? action.payload : blog)
        }
      case "DELETE_BLOG_ASYNC":
        return {
            ...state,
            blogs: state.blogs.filter(blog => blog.id !== action.payload)
        }
      default:
        return state
  }
}

export default blogReducer