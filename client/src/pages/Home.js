
import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/Home.css';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return(
    <div className="home-page-split-container">
      <div className="home-page-split-left">
        <div className="home-page-search">
          <div className="title-container">
            <h3>Discover new places and experience cuisines from around the world</h3>
            <p>Search from locations, restaurants, and hotels</p>
          </div>
          <form className="home-page-form-container fill" action="/search?">
            <input name="q" id="textSearch" className="home-search-bar" placeholder="Anywhere" type="text"/>
            <button type="submit" className="home-search-btn">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
