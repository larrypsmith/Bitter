import React from 'react';

export default class RatingBar extends React.Component {
  constructor(props) {
    super(props);
  }

  capsArray () {
    const { rating } = this.props;
    let caps = [];
    for (let i = 1; i <= rating; i++) {
      caps.push(<img className="cap" src="cap-100.png" alt="cap-0" key={i}/>)
    }
    for (let i = rating + 1; i <= 5; i++ ) {
      caps.push(<img className="cap" src="cap-0.png" alt="cap-0" key={i}/>)
    }
    return caps;
  }

  render() {
    return (
      <li className="rating">
        <p>
          Rating:
        </p>
        {this.capsArray()}
      </li>
    )
  }
}