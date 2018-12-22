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
          <SidebarLink title="علیرضا" route="/orgA/yechizi" onClick={this.hideSidebar} />
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
