import "../App.css";
import logo from "../images/logo.png";
import googleLogo from "../images/google-logo.png";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
  console.log("submitted");
};

export function Box() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <section>
      <img src={logo} className="logo"></img>
      <h2 className="tittle">Make the most of your professional life</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form_group">
          <label>Email</label>
          <input
            id="email"
            autoComplete="off"
            value={values.email}
            type="email"
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password (6 or more characters)</label>
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn
          <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and
          <a href="#">Cookie Policy</a>.
        </p>
        <button className="join-btn" type="submit">
          Agree & Join
        </button>
        <div className="separator">
          <div className="line"></div>
          <h4>or</h4>
          <div className="line"></div>
        </div>
        <button className="google-btn">
          <img src={googleLogo} />
          Join with Google
        </button>
        <p className="signin-para">
          Already on LinkedIn? <a href="#">Sign in</a>
        </p>
      </form>
      <p className="get-help">
        Looking to create a page for a business? <a href="#">Get help</a>
      </p>
    </section>
  );
}
