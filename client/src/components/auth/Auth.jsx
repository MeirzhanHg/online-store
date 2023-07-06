import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { observer } from "mobx-react-lite";

import { login, registration } from "http/userApi"

import phoneImage from "assets/img/sign-image.png";
import { validEmail } from "shared/regex";
import { Context } from "index"
import { useContext, useState } from "react"

import "./Auth.scss";

const Auth = observer(({ title, isNameRequired, text, link, question }) => {
   const { user } = useContext(Context);
   const location = useLocation();
   const navigate = useNavigate();

   const isLogin = location.pathname === "/login";

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      mode: "onChange",
   });

   const onSubmit = async (formData) => {
      console.log(formData);
      try {
         let data;
         if (isLogin) {
            data = await login(formData.email, formData.password);
            console.log(data);
         } else {
            data = await registration(formData.name, formData.email, formData.password);
            console.log(data);
         }
         user.setUser(user);
         user.setIsAuth(true);
         navigate("/");
      } catch (e) {
         console.log(e);
         // alert(e.response.data.message);
      }
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
});

export default Auth;
