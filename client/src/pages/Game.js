import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/Game.css';
import img1 from "../assets/nyc.jpg";
import img2 from "../assets/food-1.png";
import img3 from "../assets/food-2.png";

const images = [
  {
    img: img1,
    id: 1
  },
  {
    img: img2,
    id: 2
  },
  {
    img: img3,
    id: 3
  }
];

const Game = () => {
  const [selectedImage, setImage] = useState(0);

  const handleClick = (index) => {
    setImage(index);
  }

  return(
    <div>
        <h3 className='header'>Discover new places and experience cuisines from around the world</h3>
        <div className='game-page'>
          <div className='game-page-sidebar'>
            {
              images.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      onClick={() => handleClick(index)}
                      className='game-page-sidebar-item'>
                        <img src={item.img} alt='food' className='game-page-sidebar-image'/>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='game-page-main'>
            <img 
              src={images[selectedImage].img}
              alt="food-1"
              className='game-page-main-image'
            />
          </div>
        </div>
    </div>
  );
}

export default withRouter(Game);
