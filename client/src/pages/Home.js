import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import '../styles/Home.css';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {

  const history = useHistory();

  const handleNavigateDaily = () => {
    history.push('/game/daily');
  }

  const handleNavigateCustom = () => {
    history.push('/custom');
  }

  return(
    <div className="home-page-split-container">
      <div className="home-page-split-left">
        <div className="home-page-search">
          <div className="title-container">
            <h3>RESTAURHUNT</h3>
            <p>Test your foodie knowledge and discover new eateries</p>
          </div>
          <div className="home-page-button-container fill" >
            <button onClick={handleNavigateDaily} className="home-search-btn">Play Daily</button>
            <button onClick={handleNavigateCustom} className="home-search-btn">Play Custom</button>
          </div>
        </div>
      </div>
      <div className="home-page-split-right">
        <div className="home-page-carousel-container">
          <img src={require("../assets/nyc.jpg")} alt='food' className='home-page-carousel-img'/>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
