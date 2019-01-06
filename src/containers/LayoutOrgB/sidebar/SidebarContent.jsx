import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import loadClient from 'Root/redux/actions/userOrgB/loadClient';
import loadDeposits from 'Root/redux/actions/userOrgB/loadDeposits';
import clearClient from 'Root/redux/actions/userOrgB/clearUserControl';
import clearDeposits from 'Root/redux/actions/userOrgB/clearDeposits';
// import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            title="کنترل کاربران"
            route="/orgB/user-control"
            onClick={() => { clearClient(); loadClient(); }}
          />
          <SidebarLink title="ثبت‌نام کاربر" route="/orgB/signup-user" />
          <SidebarLink
            title="سپرده‌گذاری"
            route="/orgB/deposit"
            onClick={() => { clearDeposits(); loadDeposits(); }}
          />
          {/* <SidebarCategory title="صفحه ها" icon="diamond">
            <SidebarLink title="صفح" route="/pages/one" onClick={this.hideSidebar} />
            <SidebarLink title="صفح" route="/pages/one" onClick={this.hideSidebar} />
          </SidebarCategory> */}
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
