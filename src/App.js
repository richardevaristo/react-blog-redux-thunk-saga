import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { addBlog, updateBlog } from './store/actions/blogActions';
import { connect } from 'react-redux';

import Header from './components/layouts/Header';
import Blogs from './components/blogs/Blogs';
import About from './components/pages/About';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Blogs}/>
          <Route exact path="/about" component={About} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: blog => {
      dispatch(addBlog(blog))
    },
    update: blog => {
      dispatch(updateBlog(blog))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
