import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <ul>
      <button className="Nav1" onClick={() => props.display_form('login')}>login</button>
      <button className="Nav1" onClick={() => props.display_form('signup')}>signup</button>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <button className="Nav" onClick={props.handle_logout}>logout</button>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};