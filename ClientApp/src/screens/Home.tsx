import React from 'react';
import { connect } from 'react-redux';
import Banner from '../components/Banner';
import NavMenu from '../components/NavMenu';
import Rower from '../components/Rower';
import { requests } from '../tmdb';

const Home = () => (
  <React.Fragment>
    <NavMenu />
    <div className="mt-5">
      <Banner />
      <br />
      <Rower title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Rower title="Trending Now" fetchURL={requests.fetchTrending} />
      <Rower title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Rower title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Rower title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Rower title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Rower title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  </React.Fragment>

);

export default connect()(Home);
