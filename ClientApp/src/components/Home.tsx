import { connect } from 'react-redux';
import Banner from './Banner';
import Rower from './Rower';
import { requests } from '../tmdb';

const Home = () => (
  <div className="mt-5">
    <Banner />
    <Rower title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
    <Rower title="Trending Now" fetchURL={requests.fetchTrending} />
    <Rower title="Action Movies" fetchURL={requests.fetchActionMovies} />
    <Rower title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
    <Rower title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
    <Rower title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    <Rower title="Documentaries" fetchURL={requests.fetchDocumentaries} />
  </div>
);

export default connect()(Home);
