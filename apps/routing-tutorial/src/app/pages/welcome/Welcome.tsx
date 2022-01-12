import { Fragment } from 'react';
import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <Fragment>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome New User</p>
      </Route>
    </Fragment>
  );
};

export default Welcome;
