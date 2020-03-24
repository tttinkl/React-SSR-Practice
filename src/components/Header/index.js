import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store';

class Header extends Component {
  render() {
    const { login, handleLogin, handleLogout }= this.props
    return <div>
      <Link to="/">Home</Link>
      <br />
      {
        login ? <>
          <Link to='/translate'>翻译列表</Link>
          <br />
          <div onClick={handleLogout}>Logout</div></> : <><div onClick={handleLogin}>Login</div><br /></>
      }
    </div>
  }
}


const mapState = (state) => ({
  login: state.header.login
})

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})

export default connect(mapState, mapDispatch)(Header);