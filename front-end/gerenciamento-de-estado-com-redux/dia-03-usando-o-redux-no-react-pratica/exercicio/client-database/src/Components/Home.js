import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <section className="box column is-half is-offset-one-quarter">
        <Link to="/login">Login</Link>
      </section>
    );
  }
}

export default Home;
