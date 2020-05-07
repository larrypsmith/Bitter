import React from 'react';
import AddToListButton from './add_to_list_button';
import CheckInButton from './check_in_button';
import Tile from './tile';
import Typography from './typography';
import ViewBreweryButton from './view_brewery_button';

const Hero = () => {
  return(
    <Tile className="Hero">
      <Typography size='xxl' gutterBottom>Welcome to Bitter!</Typography>
      <Typography color="darkGray" gutterBottom>
        This is your home page.
        Here you can see a feed of recent checkins by other users.
      </Typography>
      <Typography  color="darkGray" gutterBottom>
        See someone drinking a beer you want to try?
        Click on the beer's name, then click the
        &nbsp;
        <AddToListButton size="sm" disabled/>
        &nbsp;
        button to save it for later.
      </Typography>
      <Typography  color="darkGray" gutterBottom>
        Click on 'Breweries' at the top of the page to see a list of breweries in our database.
        Then click
        &nbsp;
        <ViewBreweryButton size="sm" disabled />
        &nbsp;
        to see a list of that brewery's beers.
        If you see a beer you've tried before and want to rate it, click 
        &nbsp;
        <CheckInButton size="sm" disabled />
        &nbsp;
        .
      </Typography>
      <Typography color="darkGray" >
        Happy Drinking!
      </Typography>
    </Tile>
  )
};

export default Hero;