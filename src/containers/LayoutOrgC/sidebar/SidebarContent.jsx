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
          <SidebarLink title="تولید توکن" route="/orgC/generate-token" />
          <SidebarLink title="گزارش تولید توکن" route="/orgC/report-token-generation" />
          <SidebarLink title="گزارش تراکنش ها" route="/orgC/report-transactions" />
          <SidebarLink title="پنل کنترل نظرات" route="/orgC/suggestion" />
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
