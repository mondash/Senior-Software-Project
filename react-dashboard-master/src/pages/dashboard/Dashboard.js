import React, {Component} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {
  Row,
  Col,
  Alert,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
  Progress,
  Badge,
  ListGroup,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Table
} from 'reactstrap';
import { mock } from './mock'

import Widget from '../../components/Widget';
import { fetchPosts } from '../../actions/posts';
import s from './Dashboard.module.scss';

class Cal extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

class Dashboard extends Component {
  /* eslint-disable */
  static propTypes = {
    posts: PropTypes.any,
    isFetching: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };
  /* eslint-enable */

  static defaultProps = {
    posts: [],
    isFetching: false,
  };

  state = {
    isDropdownOpened: false
  };

  componentDidMount() {
    if(process.env.NODE_ENV === "development") {
      this.props.dispatch(fetchPosts());      
    }
  }

  formatDate = (str) => {
    return str.replace(/,.*$/,"");
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownOpened: !prevState.isDropdownOpened,
    }));
  }

  render() {
    return (
      <div className={s.root}>
        <Breadcrumb>
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          <BreadcrumbItem active>Dashboard</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="mb-lg">Dashboard</h1>
        <Row>
          <Col sm={12} md={6}>
            <Widget
              title={
                <div>
                  <div className="pull-right mt-n-xs">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="form-control input-sm"
                    />
                  </div>
                  <h5 className="mt-0 mb-3">
                    <i className="fa fa-user mr-xs opacity-70" />{' '}
                    Recent Clients
                  </h5>
                </div>
              }
            >
              <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Bill Gates</td>
                    <td>BILLionair@microsoft.com</td>
                    <td>7400 Northeast 18th Street, Medina, WA</td>
                    <td>Commercial</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Paul McCartney</td>
                    <td>SIRmcCartney@gmail.com</td>
                    <td>20 Forthlin Road, Liverpool, UK</td>
                    <td>Residential</td>
                    <td>
                      <span className="py-0 px-1 bg-danger rounded text-white">closed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>John Rockefeller</td>
                    <td>Betterthancarnegie@standard.oil</td>
                    <td>200 Lake Road, Pocantico Hills, NY</td>
                    <td>Industrial</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Elvis Presley</td>
                    <td>HoundDog@rock.roll</td>
                    <td>306 Elvis Presley Dr, Tupelo, MS</td>
                    <td>Residential</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">active</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Widget>
          </Col>        {/* User Database goes here */}
          <Col sm={12} md={6}>
            <Widget >

            <Cal></Cal>
            
            </Widget>  {/* CALENDAR GOES HERE MUST TALK WITH KELLER WILLIAMS TO SET UP */}
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Widget
              title={
                <div>
                  <div className="pull-right mt-n-xs">
                    <Link to="/app/main" className="td-underline fs-sm">Options</Link>
                  </div>
                  <h5 className="mt-0 mb-0">
                    Reminders{' '}
                    <Badge color="success" className="ml-xs">
                      5
                    </Badge>
                  </h5>
                  <p className="fs-sm mb-0 text-muted">

                  </p>
                </div>
              }
            >
              <table className="table table-sm table-no-border mb-0">
                <tbody>
                {this.props.posts &&
                this.props.posts.map(post => (
                  <tr key={post.id}>
                    <td>{this.formatDate(new Date(post.updatedAt).toLocaleString())}</td>
                    <td>
                      <Link to="/app/posts">{post.title}</Link>
                    </td>
                  </tr>
                ))}
                {this.props.posts &&
                !this.props.posts.length && (
                  mock.map(post => (
                    <tr key={post.id}>
                      <td>{post.updatedAt}</td>
                      <td>
                        <Link to="/app/posts">{post.title}</Link>
                      </td>
                    </tr>
                  ))
                )}
                {this.props.isFetching && (
                  <tr>
                    <td colSpan="100">Loading...</td>
                  </tr>
                )}
                </tbody>
              </table>
              <div className="d-flex justify-content-end">
                <Link to="/app/posts" className="btn btn-default">
                  View all Posts <Badge className="ml-xs" color="danger">13</Badge>
                </Link>
              </div>
            </Widget>
          </Col>        {/* Reminders */}
          <Col sm={6}>
            <ListGroup>
              <Link to="/app" className="list-group-item">
                <i className="fa fa-phone mr-xs text-secondary" />{' '}
                Incoming calls <Badge className="ml-xs" color="danger">0</Badge>
              </Link>
              <Link to="/app" className="list-group-item">
                <i className="fa fa-bell-o mr-xs text-secondary" />{' '}
                Notifications <Badge className="ml-xs" color="warning">6</Badge>
              </Link>
              <Link to="/app" className="list-group-item">
                <i className="fa fa-comment-o mr-xs text-secondary" />{' '}
                Messages <Badge className="ml-xs" color="success">18</Badge>
              </Link>
              <Link to="/app" className="list-group-item">
                <i className="fa fa-cloud mr-xs text-secondary" /> Inbox{' '}
              </Link>
            </ListGroup>
          </Col>        {/* Message history */}
        </Row>
                                  {/* start adding new dashboard items here */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    posts: state.posts.posts,
  };
}

export default connect(mapStateToProps)(Dashboard);
