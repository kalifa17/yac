import React, { Component } from 'react';
import './Init.scss';

export default class InitForm extends Component {

  constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

  usernameChangeHandler = (event) =>  {
    this.setState({
      username: event.target.value
    })
  }

  render() {

    return (
      <div className="login">
        <form onSubmit={() => this.props.onSubmit(this.state.username)} className="form">
           <input
              type="text"
              onChange={this.usernameChangeHandler}
              placeholder="Username"
              required />
            <button className="submit" type="submit" value="Submit">
              Chat
            </button>
         </form>
      </div>
    );
  }
}
