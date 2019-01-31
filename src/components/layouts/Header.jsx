import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

export default class Header extends Component {
  state = {
    menuIsActive: false
  }
  toggleMenu = () => {
    this.setState({menuIsActive: !this.state.menuIsActive})
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar is-info">
          <div className="navbar-brand">
              <Link className="navbar-item" to="/">REACT {'<3'} REDUX</Link>
              <button className="navbar-burger burger button is-info" onClick={this.toggleMenu}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
          </div>
          <div className={classnames('navbar-menu', { 'is-active': this.state.menuIsActive })}>
            <div className="navbar-end">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/about">About</Link>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
