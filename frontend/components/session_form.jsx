import React from 'react';
import { Link } from 'react-router-dom'
import AuthBackground from './auth_background';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.getOtherFormPath = this.getOtherFormPath.bind(this);
    this.getOtherFormName = this.getOtherFormName.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  getOtherFormPath() {
    return (this.props.formType === 'Sign Up' ? '/login' : '/signup')
  }

  getOtherFormName() {
    return (this.props.formType === 'Log In' ? 'Sign Up' : 'Log In')
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          return (
            <li key={i}>{error}</li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className="session-page">
        <AuthBackground />
        <form onSubmit={this.handleSubmit} className="session-form">
          <h1>{this.props.formType}</h1>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.update('username')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <button>Submit</button>
          {this.renderErrors()}
          <Link to={`${this.getOtherFormPath()}`}>{this.getOtherFormName()}</Link>
        </form>
      </div>
    )
  }
}