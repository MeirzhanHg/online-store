import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import phoneImage from "assets/img/sign-image.png";

import "./Auth.scss";
import { validEmail } from 'shared/regex'

const Auth = ({ title, isNameRequired, text, link,question }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      mode: "onChange",
   });

   const onSubmit = (data) => {
      console.log(data);
      reset();
   };

   return (
      <section className="auth">
         <div className="container">
            <div className="auth_content">
               <div className="auth_img">
                  <img src={phoneImage} alt="phoneImage" />
               </div>

               <div className="auth_wrapper">
                  <form className="form" onSubmit={handleSubmit(onSubmit)}>
                     <h4 className="auth_title">{title}</h4>
                     <h3 className="auth_details">Enter your details below</h3>

                     {!isNameRequired && (
                        <div className="input">
                           <input
                              type="text"
                              placeholder="Name"
                              name="name"
                              {...register("name", {
                                 required: "Name required",
                              })}
                           />
                           {errors.name && (
                              <div className="error">{errors.name.message}</div>
                           )}
                        </div>
                     )}

                     <div className="input">
                        <input
                           type="email"
                           placeholder="Email or Phone Number"
                           name="email"
                           {...register("email", {
                              required: "Email required",
                              pattern: {
                                 value: validEmail,
                                 message:
                                    "Please enter your current email address",
                              },
                           })}
                        />
                        {errors.email && (
                           <div className="error">{errors.email.message}</div>
                        )}
                     </div>

                     <div className="input">
                        <input
                           type="password"
                           placeholder="Password"
                           name="password"
                           {...register("password", {
                              required: "Password required",
                              minLength: {
                                 value: 6,
                                 message:
                                    "The minimum length must be more than 6 characters",
                              },
                           })}
                        />
                        {errors.password && (
                           <div className="error">
                              {errors.password.message}
                           </div>
                        )}
                     </div>

                     <button type="submit" className="form_btn">
                        {text}
                     </button>

                     <div className="form_footer">
                        <p>
                           {question}
                           <Link to={`/${link}`} className="form_logIn">
                              {link}
                           </Link>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Auth;
