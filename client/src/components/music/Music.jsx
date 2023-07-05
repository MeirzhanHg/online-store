import musicImage from "assets/img/music-bg.png";

import "./Music.scss";
import Button from "components/ui/button/Button";

const Music = () => {
   return (
      <section className="music">
         <div className="music-wrapper">
            <div className="music-content">
               <div className="music-subtitle">Categories</div>
               <h3 className="music-title">Enhance Your Music Experience</h3>
               <Button className={".music-btn"} children={"Buy Now!"}></Button>
            </div>
            <div className="music-image">
               <img src={musicImage} alt="music" />
            </div>
         </div>
      </section>
   );
};

export default Music;
