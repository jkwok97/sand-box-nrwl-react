import { Component } from 'react';
import classes from './User.module.css';

// CLASS BASED COMPONENT
class User extends Component {
  // constructor() {}

  componentWillUnmount() {
    console.log('user will unmount');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// FUNCTIONAL COMPONENT
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
