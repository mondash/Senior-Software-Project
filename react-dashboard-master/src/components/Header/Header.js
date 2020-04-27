/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import gql from 'graphql-tag';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'
// import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Icon from '../Icon';

import photo from '../../images/photo.jpg';
// import { logoutUser } from '../../actions/user';
import { clearSession } from '../../actions/userNew'
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

const mutation = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

const Header = ({ sidebarToggle }) => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const [ deleteUserSession ] = useMutation(mutation);
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const doLogout = () => {
    dispatch(clearSession());
    deleteUserSession({ variables: { sessionId: session.id } });
  }

  return (
    <Navbar className={s.root}>
      <Nav>
        <NavItem
          className={cx('visible-xs mr-4 d-sm-up-none', s.headerIcon, s.sidebarToggler)}
          href="#"
          onClick={sidebarToggle}
        >
          <i className="fa fa-bars fa-2x text-muted" />
        </NavItem>
        <NavItem>
          <InputGroup>
            <Input placeholder="Search for..." />
            <InputGroupAddon addonType="append" className="px-2">
              <i className="fa fa-search" />
            </InputGroupAddon>
          </InputGroup>
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <NavItem className={cx('', s.headerIcon)}>
          <Link to="/app/posts">
          <Button>
            <Icon glyph="mail"/>
            <span>8</span>
          </Button>
          </Link>
        </NavItem>
        <NavItem className={cx('', s.headerIcon)}>
          <Link to="/app/posts">
          <Button>
            <Icon glyph="notification"/>
            <span>13</span>
          </Button>
          </Link>
        </NavItem>
        <NavItem className={cx('', s.headerIcon)}>
          <Button>
            <Icon glyph="settings"/>
          </Button>
        </NavItem>
        <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
          <DropdownToggle nav>
            <img className={cx('rounded-circle mr-sm', s.adminPhoto)} src={photo} alt="administrator" />
            <span className="text-body">Administrator</span>
            <i className={cx('fa fa-angle-down ml-sm', s.arrow, {[s.arrowActive]: isOpen})} />
          </DropdownToggle>
          <DropdownMenu style={{width: '100%'}}>
            <DropdownItem>
              <NavLink to="/app/posts">Posts</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/app/profile">Profile</NavLink>
            </DropdownItem>
            <DropdownItem onClick={doLogout}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;
