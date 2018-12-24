import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {
    logged,
  } = props;

  if (!logged) {
    return <Redirect to="/login/orgC" />;
  }

  return props.children;
};

export default connect(state => ({
  logged: state.userOrgC.logged,
}))(ProtectedRoute);
