import Field from "components/ui/field/Field";
import { validEmail } from "shared/regex";

const OrderFields = ({
   register,
   formState: { errors },
   isPasswordRequired = false,
}) => {
   return (
      <>
         <Field
            {...register("name", {
               required: "Name required",
            })}
            placeholder="First Name"
            error={errors.name}
         />

         <Field {...register("company")} placeholder="Company Name" />

         <Field
            {...register("address", {
               required: "Address required",
            })}
            placeholder="Street Address"
            error={errors.address}
         />

         <Field
            {...register("apartment")}
            placeholder="Apartment, floor, etc. (optional)"
         />

         <Field
            {...register("city", {
               required: "Address required",
            })}
            placeholder="Town/City"
            error={errors.city}
         />

         <Field
            {...register(
               "phone",
               isPasswordRequired
                  ? {
                       required: "Phone Number",
                       minLength: {
                          value: 6,
                          message:
                             "Минималды ұзындығы 6 символдан көп болуы керек",
                       },
                    }
                  : {}
            )}
            type="phone"
            placeholder="Phone Number"
            error={errors.phone}
         />

         <Field
            {...register("email", {
               required: "Электрондық пошта қажет",
               pattern: {
                  value: validEmail,
                  message:
                     "Өтінеміз қолданыстағы электронды пошта адресін енгізіңіз",
               },
            })}
            placeholder="E-mail"
            error={errors.email}
         />
      </>
   );
};

export default OrderFields;
