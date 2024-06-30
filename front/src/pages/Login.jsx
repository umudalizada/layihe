import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import backgroundVideo from "../assets/videos/videoplaybackk.mp4";
import { getAllData } from "../service/requests";
import { addUsers } from "../redux/slice/userSlice";
import "./assets/scss/Login.scss";
import { useNavigate } from "react-router-dom";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  name: Yup.string().required("Name is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [PasModalOpen, setPasModalOpen] = useState(false); 
  const [verificationCode, setVerificationCode] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) => state.allUser.users);

  useEffect(() => {
    getAllData("users").then((res) => {
      dispatch(addUsers(res));
    });
  }, [dispatch]);

  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        email: values.email,
        password: values.password,
      });

      const token = res.data.token;
      const user = users.find((elem) => elem.email === values.email);

      if (user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password. Please try again.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Invalid email or password.",
        text: "Login failed. Please try again.",
      });
    }
  };

  const handleSignUp = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        values
      );

      const newUser = {
        username: values.username,
        name: values.name,
        lastname: values.lastname,
        email: values.email,
      };

      dispatch(addUsers(newUser));

      Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        text: "Registration completed successfully! Redirecting to login.",
      }).then(() => {
        setIsFlipped(false);
        window.location.reload();
      });
    } catch (error) {
      console.error("Sign up error:", error);

      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: "User with this email already exists. Please use a different email.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: "Registration failed. Please try again.",
        });
      }
    }
  };

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault()
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const RandomCode = () => {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleResetPassword = async (values) => {
    try {
      const verifyCode = RandomCode();
      const res = await axios.post(
        "http://localhost:3000/auth/reset-password",
        {
          email: values.email,
        }
      );

      if (res.status === 200) {
        setVerificationCode(verifyCode);
        setResetEmail(values.email);

        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "A password reset email has been sent. Please check your inbox.",
        });

        const templateParams = {
          to_email: values.email,
          message: verifyCode,
        };

        emailjs
          .send(
            "service_4xdex65",
            "template_tyc49au",
            templateParams,
            "43oi_U7RtguYqureE"
          )
          .then((response) => {
            console.log("Email successfully sent:", response);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });

        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Reset password error:", error);
      Swal.fire({
        icon: "error",
        title: "Reset Password Failed",
        text: "Failed to send reset email. Please try again.",
      });
    }
  };

  const handleVerifyCode = (values) => {
    if (values.code === verificationCode.toString()) {
      setIsModalOpen(false);
      setPasModalOpen(true); 
      Swal.fire({
        icon: "success",
        title: "Code Verified",
        text: "Verification successful! You can proceed with resetting your password.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Verification Failed",
        text: "The verification code you entered is incorrect. Please try again.",
      });
    }
  };

  const handleResetPasswordSubmit = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/updatePassword",
        {
          email: resetEmail,
          newPass: values.newPass,
        }
      );

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Password Updated",
          text: "Your password has been updated successfully.",
        });
        setPasModalOpen(false)
       navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error updating your password. Please try again later.",
      });
    }
  };

  return (
    <section id="login">
      <video autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input
              className="toggle"
              type="checkbox"
              checked={isFlipped}
              onChange={handleToggle}
            />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className={`flip-card__inner ${isFlipped ? "flipped" : ""}`}>
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={LoginSchema}
                  onSubmit={handleSubmit}
                >
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="flip-card__form">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="flip-card__input"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                      <div className="password-field">
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          className="flip-card__input"
                        />
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={togglePasswordVisibility}
                          className="password-toggle-icon"
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                      <button type="submit" className="flip-card__btn">
                        Log in
                      </button>
                    </Form>
                  )}
                </Formik>
                <div className="forgot-password" onClick={(e)=>handleForgotPassword(e)}>
                  <FontAwesomeIcon icon={faKey} /> Forgot Password?
                </div>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <Formik
                  initialValues={{
                    username: "",
                    name: "",
                    lastname: "",
                    email: "",
                    password: "",
                  }}
                  validationSchema={SignUpSchema}
                  onSubmit={handleSignUp}
                >
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="flip-card__form">
                      <Field
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="flip-card__input"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error"
                      />
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="flip-card__input"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                      <Field
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        className="flip-card__input"
                      />
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="error"
                      />
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="flip-card__input"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                      <div className="password-field">
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          className="flip-card__input"
                        />
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={togglePasswordVisibility}
                          className="password-toggle-icon"
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                      <button type="submit" className="flip-card__btn">
                        Sign up
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </label>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-close" onClick={handleCloseModal}>
              ✖
            </div>
            <h2>Forgot Password</h2>
            {!verificationCode ? (
              <Formik
                initialValues={{ email: "" }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                })}
                onSubmit={handleResetPassword}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="flip-card__input"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                    <button type="submit">Send Code to Reset Password</button>
                  </Form>
                )}
              </Formik>
            ) : (
              <Formik initialValues={{ code: "" }} onSubmit={handleVerifyCode}>
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <p>
                      A verification code has been sent to your email. Please
                      enter below:
                    </p>
                    <Field
                      type="text"
                      name="code"
                      placeholder="Verification Code"
                      className="flip-card__input"
                    />
                    <button type="submit">Verify Code</button>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      )}

      {PasModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-close" onClick={() => setPasModalOpen(false)}>
              ✖
            </div>
            <h2>Reset Password</h2>
            <Formik
              initialValues={{ newPass: "" }}
              validationSchema={Yup.object({
                newPass: Yup.string()
                  .min(6, "Password must be at least 6 characters")
                  .required("Password is required"),
              })}
              onSubmit={handleResetPasswordSubmit}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Field
                    type="password"
                    name="newPass"
                    placeholder="New Password"
                    className="flip-card__input"
                  />
                  <ErrorMessage
                    name="newPass"
                    component="div"
                    className="error"
                  />
                  <button type="submit">Reset Password</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
