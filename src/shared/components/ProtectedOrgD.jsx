import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loadClientD from 'Root/redux/actions/userOrgD/loadClient';
import loadDepositsD from 'Root/redux/actions/userOrgD/loadDeposits';

const ProtectedRoute = (props) => {
  const {
    logged,
  } = props;

  if (!logged) {
    return <Redirect to="/login/orgD" />;
  }

  loadDepositsD();
  loadClientD();

  return props.children;
};

export default connect(state => ({
  logged: state.userOrgD.logged,
}))(ProtectedRoute);
