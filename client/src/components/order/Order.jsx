import OrderFields from "./OrderFields";
import { useForm } from "react-hook-form";
import "./Order.scss";

const Order = () => {
   const {
      register: registerInput,
      handleSubmit,
      formState,
      reset,
   } = useForm({
      mode: "onChange",
   });

   const onSubmit = (data) => {
      console.log(data);
      reset();
   };
   return (
      <section className="order">
         <div className="order__block">
            <h2 className="order__title">Billing Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <OrderFields
                  formState={formState}
                  register={registerInput}
                  isPasswordRequired
               />
            </form>
         </div>
         <div className="order__info">
            
         </div>
      </section>
   );
};

export default Order;
