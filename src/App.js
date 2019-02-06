import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
          <Route exact path="/" component={Blogs}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/blog/create" component={CreateBlog} />
          <Route exact path="/blog/edit/:id" component={EditBlog} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect()(App));
