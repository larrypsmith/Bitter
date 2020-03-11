import React from 'react';

export default class TextBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body.slice(0, this.props.cutoffLength),
      buttonText: '...Show More',
    }
    this.toggleLength = this.toggleLength.bind(this);
  }

  toggleLength(e) {
    if (this.state.buttonText === '...Show More') {
      this.setState({
        buttonText: '...Show Less',
        body: this.props.body
      })
    } else {
      this.setState({
        buttonText: '...Show More',
        body: this.props.body.slice(0, this.props.cutoffLength)
      })
    }
  }

  render() {
    const { buttonText, body } = this.state;

    return (
      <div className="text-body">
        <p>
          {body}
          <button className="link" onClick={this.toggleLength}>
            {buttonText}
          </button>
        </p>
      </div>
    )
  }
}