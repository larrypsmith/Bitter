import React from 'react';
import CheckinContainer from './checkin_container'

export default class CheckinIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {

    return(
      <div className="checkin-index">
        <h1>Recent Checkins</h1>

        <ul>
          {
            Object.values(this.props.checkins).map((checkin, idx) => (
              <CheckinContainer
                checkin={checkin}
                key={idx}
              />
              ))
            }
        </ul>
      </div>
    )
  }
}