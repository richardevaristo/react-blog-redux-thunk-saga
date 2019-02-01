import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { addBlog, deleteBlog } from './store/actions/blogActions';
import { connect } from 'react-redux';

import Header from './components/layouts/Header';
import Blogs from './components/blogs/Blogs';
import About from './components/pages/About';
import 'bulma/css/bulma.min.css'
import './App.css'
import CreateBlog from './components/blogs/CreateBlog';
import EditBlog from './components/blogs/EditBlog';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/">
            <Blogs 
              blogs={this.props.blogs} 
              process={this.props.process} 
              delete={this.props.delete}
            />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/blog/create">
            <CreateBlog add={this.props.add} options={this.props.blogs.categoryOptions} process={this.props.process}/>
          </Route>
          <Route exact path="/blog/edit/:id" component={EditBlog}/>
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogReducer,
    selectedBlog: state.blogReducer.blog,
    process: state.blogReducer.process
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: blog => {
      dispatch(addBlog(blog))
    },
    delete: blog => {
      dispatch(deleteBlog(blog))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
