import React from 'react';
import Checkin from './checkin';

export default class CheckinIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {
    if (!this.props.checkins) return null;
    return(
      <div className="checkin-index index">
        <h1>Recent Checkins</h1>
        <ul>
          {
            Object.values(this.props.checkins).map((checkin, idx) => (
              <Checkin checkin={checkin} key={idx} />
            ))
          }
        </ul>
      </div>
    )
  }
}