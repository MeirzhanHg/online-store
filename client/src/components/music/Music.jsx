import musicImage from "assets/img/music.png";

import "./Music.scss";
import Button from "components/ui/button/Button";
import Timer from "components/ui/timer/Timer";

const Music = () => {
   return (
      <section className="music">
         <div className="music-wrapper">
            <div className="music-content">
               <div className="music-subtitle">Categories</div>
               <h3 className="music-title">Enhance Your Music Experience</h3>
               <div className="music-timer">
                  <Timer deadline="July, 7, 2023" ellipse='ellipse'/>
               </div>
               <Button background>Buy Now!</Button>
            </div>
            <div className="music-image">
               <img src={musicImage} alt="music" />
            </div>
         </div>
      </section>
   );
};

export default Music;
