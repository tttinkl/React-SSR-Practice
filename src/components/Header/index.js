import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
    console.log(props)
    return (
    <div>
      <Link to="/">Home</Link>
      <br />
      {
      props.login ? <><Link to='/translate'>翻译列表</Link>
        <br />
        <Link to='/logout'>Logout</Link></> : <><Link to="/login">Login</Link> <br /></>
      }
    </div>
    )
};

const mapState = (state) => ({
  login: state.header.login
})
export default connect(mapState, null)(Header);