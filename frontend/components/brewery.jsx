import React from 'react';
import Avatar from './avatar';
import ConditionalRouteRender from './conditional_route_render';
import FlexChild from './flex_child';
import FlexParent from './flex_parent';
import TextBody from './text_body';
import Typography from './typography';
import ViewBreweryButton from './view_brewery_button';
import { Link } from 'react-router-dom';

const Brewery = ({ brewery:
  { id, name, city, state, country, description, profilePictureUrl } }) => (
  <FlexParent>
    <FlexChild>
      <Link to={`/breweries/${id}`}>
        <Avatar
          src={profilePictureUrl}
          alt={name}
          square
          size={100}
        />
      </Link>
    </FlexChild>
    
    <FlexChild grow={1}>
      <Typography size="xl">{name}</Typography>
      <Typography size="md" color="darkGray">{city}, {state} {country}</Typography>
      <TextBody initialBody={description} cutoffLength={165} />
    </FlexChild>

    <ConditionalRouteRender id={id}>
      <FlexChild align="center">
        <ViewBreweryButton id={id} />
      </FlexChild>
    </ConditionalRouteRender>
  </FlexParent>
);

export default Brewery;
