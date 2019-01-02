import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import loadTokens from 'Root/redux/actions/userOrgC/loadTokens';
import loadTrans from 'Root/redux/actions/userOrgC/loadTrans';
import loadSuggestion from 'Root/redux/actions/userOrgC/loadSuggestion';
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
          <SidebarLink
            title="گزارش تولید توکن"
            route="/orgC/report-token-generation"
            onClick={() => loadTokens(true)}
          />
          <SidebarLink
            title="تراکنش‌های کابران"
            route="/orgC/report-transactions"
            onClick={() => loadTrans(true)}
          />
          <SidebarLink
            title="کنترل نظرات"
            route="/orgC/suggestion"
            onClick={() => loadSuggestion(true)}
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
