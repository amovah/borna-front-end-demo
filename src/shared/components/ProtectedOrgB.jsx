import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loadClient from 'Root/redux/actions/userOrgB/loadClient';
import loadDeposits from 'Root/redux/actions/userOrgB/loadDeposits';


const ProtectedRoute = (props) => {
  const {
    logged,
  } = props;

  if (!logged) {
    return <Redirect to="/login/orgB" />;
  }

  loadClient();
  loadDeposits();

  return props.children;
};

export default connect(state => ({
  logged: state.userOrgB.logged,
}))(ProtectedRoute);
