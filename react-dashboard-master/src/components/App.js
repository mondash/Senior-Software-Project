import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { Switch, Route, Redirect } from 'react-router';
// import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ErrorPage from '../pages/error';

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
//import DocumentationLayoutComponent from '../documentation/DocumentationLayout';
import Login from '../pages/login';
import Register from '../pages/register';
// import { logoutUser } from '../actions/user';
import { setSession } from '../actions/userNew';


import gql from 'graphql-tag';

const GET_USER_SESSION = gql`
  query GET_USER_SESSION {
    userSession(me: true) {
      id
      user {
        email
        id
      }
    }
  }
`;

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

const App = () => {
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(GET_USER_SESSION)
    if (loading) return <p>Loading...</p>
    if (error) return <h1>Bad news everyone</h1>

    // dispatch(setSession('530bc2af-dd04-4a43-a37f-a59001b9b6bc'));

    if (data.userSession) {
        dispatch(setSession(data.userSession));
    }

    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton/>}
            />
            <Route path="/" exact render={() => <Redirect to="/app/main"/>}/>
            <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/>
            <Route path="/app" component={LayoutComponent}/>
            <Route path="/documentation" exact
                    render={() => <Redirect to="/documentation/getting-started/overview"/>}/>
            {/* <Route path="/documentation" component={DocumentationLayoutComponent}/> */}
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/error" exact component={ErrorPage}/>

        </div>

    );
}

export default App;
