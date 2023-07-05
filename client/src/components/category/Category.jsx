import Subtitle from "components/ui/subtitle/Subtitle";
import { categoryList } from "./category.data";

import "./Category.scss";

const Category = () => {
   return (
      <div className="category">
         <Subtitle name="Categories" title="Browse By Category" />
         <div className="category-list">
            {categoryList.map((item, i) => {
               return (
                  <div className="category-column" key={i}>
                     <div className="category-item">
                        <div className="category-icon">
                           <img src={item.img} alt={item.name} />
                        </div>
                        <h4 className="category-name">{item.name}</h4>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Category;
