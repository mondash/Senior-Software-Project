import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import Icon from '../Icon';
import LinksGroup from './LinksGroup/LinksGroup';

import s from './Sidebar.module.scss';

const Sidebar = () => (
  <nav className={s.root}>
    <header className={s.logo}>
      <Link to="/app/main">
        <Icon glyph="keller" />
      </Link>
    </header>
    <ul className={s.nav}>
      <LinksGroup
        header="Dashboard"
        headerLink="/app/main"
        glyph="dashboard"
      />
      <LinksGroup
        header="Clients"
        headerLink="/app/notFound"
        glyph="typography"
      />
      <LinksGroup
        header="Calendar"
        headerLink="/app/notFound"
        glyph="tables"
      />
      <LinksGroup
        header="Messenger"
        headerLink="/app/posts"
        glyph="notifications"
      />
      <LinksGroup
        header="Tools"
        headerLink="/app/components"
        childrenLinks={[
          {
            name: 'Reports',
            link: '/app/notFound',
          },
          {
            name: 'Documents',
            link: '/app/notFound',
          },
          {
            name: 'Team Viewer',
            link: '/app/components/Placeholder',
          },
          {
            name: 'Properties',
            link: '/app/components/maps',
          },
        ]}
        glyph="components"
      />
    </ul>
  </nav>
);

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
