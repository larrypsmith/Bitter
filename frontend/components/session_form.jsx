import React from 'react';
import { Link } from 'react-router-dom'

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
    return (this.props.formType === 'signup' ? '/login' : '/signup')
  }

  getOtherFormName() {
    return (this.props.formType === 'login' ? 'Sign Up' : 'Log In')
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
      <div>
        <h1>{this.props.formType}</h1>
        <Link to={`${this.getOtherFormPath()}`}>{this.getOtherFormName()}</Link>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.update('username')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <button>Submit</button>
        </form>
        {this.renderErrors()}
      </div>
    )
  }
}