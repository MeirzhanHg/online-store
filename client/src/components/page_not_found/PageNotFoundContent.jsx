import Button from "components/ui/button/Button";
import { Link } from "react-router-dom";

import "./PageNotFoundContent.scss";

const PageNotFoundContent = () => {
   return (
      <div className="pageNotFound-content">
         <h2 className="pageNotFound-title">404 Not Found</h2>
         <p className="pageNotFound-subtitle">
            Your visited page not found. You may go home page.
         </p>
         <Link to={"/"}>
            <Button classNames={`pageNotFound-btn`}>Back to home page</Button>
         </Link>
      </div>
   );
};

export default PageNotFoundContent;
