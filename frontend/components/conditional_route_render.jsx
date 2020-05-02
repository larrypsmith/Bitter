import React from 'react';
import { withRouter } from 'react-router-dom';

const ConditionalRouteRender = ({ match, id, children }) => {
  const routeId = parseInt(match.params.id);
  if (routeId === id) return null;
  return(
    <React.Fragment>
      {children}
    </React.Fragment>
  )
};

export default withRouter(ConditionalRouteRender);