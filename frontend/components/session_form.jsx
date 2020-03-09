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
    this.getOtherFormInfo = this.getOtherFormInfo.bind(this)
    this.otherForm = this.getOtherFormInfo();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

  getOtherFormInfo() {
    return (this.props.formType === 'Sign Up') ? {
      path: '/login',
      name: 'Log In!',
      text: 'Already have an account? '
    } : {
      path: '/signup',
      name: 'Sign Up!',
      text: 'New around here? '
    }
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => {
          return (
            <li key={i}>{error}!</li>
          )
        })}
      </ul>
    )
  }

  componentWillUnmount() {
    if (this.props.errors.length !== 0) {
      this.props.removeErrors();
    }
  }

  render() {
    return (
      <div>
        <AuthBackground />
        <div className="session-page">
          <form onSubmit={this.handleSubmit} className="session-form">
            <Link to="/">
              <h1>BITTER</h1>
              <h3>DRINK SOCIALLY</h3>
            </Link>
            <div className="input-field">
              <i className="far fa-user"></i>
              <input type="text" placeholder="username" value={this.state.username} onChange={this.update('username')}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="password" value={this.state.password} onChange={this.update('password')} />
            </div>
            <button>{this.props.formType}</button>
            {this.renderErrors()}
            <p>
              {this.otherForm.text}
              <Link to={`${this.otherForm.path}`}>
                <strong>{this.otherForm.name}</strong>
              </Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}