import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
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
          <SidebarLink title="کنترل کاربران" route="/orgB/user-control" />
          <SidebarLink title="ثبت‌نام کاربر" route="/orgB/signup-user" />
          <SidebarLink title="سپرده گذاری" route="/orgB/deposit" />
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
