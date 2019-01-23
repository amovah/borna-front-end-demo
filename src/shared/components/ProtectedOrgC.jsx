import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loadTokens from 'Root/redux/actions/userOrgC/loadTokens';
import loadTrans from 'Root/redux/actions/userOrgC/loadTrans';
import loadClientA from 'Root/redux/actions/userOrgC/loadClient';
import loadSuggestion from 'Root/redux/actions/userOrgC/loadSuggestion';

const ProtectedRoute = (props) => {
  const {
    logged,
  } = props;

  if (!logged) {
    return <Redirect to="/login/orgC" />;
  }

  loadClientA();
  loadTokens();
  loadTrans();
  loadSuggestion();

  return props.children;
};

export default connect(state => ({
  logged: state.userOrgC.logged,
}))(ProtectedRoute);
