import "./Subtitle.scss";

const Subtitle = ({title, name}) => {
   return (
      <div className="bestProducts">
         <div className="section-subtitle">
            <div className="section-subtitle-block"></div>
            {name}
         </div>
         <h2 className="section-title">{title}</h2>

      </div>
   );
};

export default Subtitle;