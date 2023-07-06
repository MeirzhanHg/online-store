import { forwardRef } from "react";

import './Field.scss'

const Field = forwardRef(
   ({ placeholder, error, type = "text", ...rest }, ref) => {
      return (
         <div className="order__input">
            <label>
               <span>{placeholder}</span>
               <input type={type} ref={ref} {...rest} />
            </label>
            {error && <div className='error'>{error.message}</div>}
         </div>
      );
   }
);

Field.displayName = "Field";

export default Field;
