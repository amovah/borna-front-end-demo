import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {
    logged,
  } = props;

  if (!logged) {
    return <Redirect to="/login/orgD" />;
  }

  return props.children;
};

export default connect(state => ({
  logged: state.userOrgD.logged,
}))(ProtectedRoute);
