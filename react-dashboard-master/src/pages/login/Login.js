import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
// import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Alert, 
  Button, 
  FormGroup, 
  Input, 
  Row,
  Col,
  Form
} from 'reactstrap';
import s from './Login.module.scss';
import Widget from '../../components/Widget';
import Footer from "../../components/Footer";
import { setSession } from '../../actions/userNew'

const mutation = gql`
mutation($email: String!, $password: String!) {
  createUserSession(email: $email, password: $password) {
    id
    user {
      email
      id
    }
  }
}
`;

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const session = useSelector(state => state.session);
  const [createUserSession, { data }] = useMutation(mutation);
            
  if (session) {
    return <Redirect to='/app' />;
  }

  const onSubmit = event => {
    event.preventDefault();
    createUserSession({ variables: { email, password } });
  };

  if (data) {
    console.log('dispatching')
    dispatch(setSession(data.createUserSession));
  }

  console.log(session);


    return (

      <div className={s.root}>
      <Row>
        <Col xs={{size: 10, offset: 1}} sm={{size: 6, offset: 3}} lg={{size:4, offset: 4}}>
          <p className="text-center"></p>
          <Widget className={s.widget}>
            <h4 className="mt-0">Keller Williams</h4>
            <p className="fs-sm text-muted">
              User your username and password to sign in
            </p>
            <Form className="mt" onSubmit={onSubmit}>
              {/* {this.props.errorMessage && (
                <Alert size="sm" color="danger">
                  {this.props.errorMessage}
                </Alert>
              )} */}
              <FormGroup className="form-group">
                <Input
                  className="no-border"
                  value={email}
                  onChange={evt => setEmail(evt.target.value)}
                  type="text"
                  required
                  name="username"
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="no-border"
                  value={password}
                  onChange={evt => setPassword(evt.target.value)}
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <div className="d-flex justify-content-between align-items-center">
                <a href="#" className="fs-sm">Trouble with account?</a> {/* eslint-disable-line */}
                <div>
                  <Button color="default" size="sm">
                    Create an account
                  </Button>
                  <Button color="danger" size="sm" type="submit">
                    Login
                  </Button>
                </div>
              </div>
            </Form>
          </Widget>
        </Col>
      </Row>
      <Footer className="text-center" />
      </div>
    );
}

// function mapStateToProps(state) {
//     return {
//         isFetching: state.auth.isFetching,
//         isAuthenticated: state.auth.isAuthenticated,
//         errorMessage: state.auth.errorMessage,
//     };
// }

export default Login;

