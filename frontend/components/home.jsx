import React from 'react';
import CheckinIndex from './checkin_index';
import Container from './container';
import Hero from './hero';

const Home = () => {
  return(
    <Container maxWidth='lg'>
      <Hero />
      <CheckinIndex />
    </Container>
  )
};

export default Home;