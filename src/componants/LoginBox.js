import "../App.css";
import logo from "../images/logo.png";
import gooogleLogo from "../images/google-logo.png";
export function Box() {
  return (
    <section>
      <img src={logo} className="logo"></img>
      <h2 className="tittle">Make the most of your professional life</h2>
      <form>
        <div className="form_group">
          <label>Email</label>
          <input id="email" autocomplete="off" />
        </div>
        <div className="form_group">
          <label>Password (6 or more characters)</label>
          <input type="password" id="password" />
        </div>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn
          <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and
          <a href="#">Cookie Policy</a>.
        </p>
        <button className="join-btn">Agree & Join</button>
        <div className="separator">
          <div className="line"></div>
          <h4>or</h4>
          <div className="line"></div>
        </div>
        <button className="google-btn">
          <img src={gooogleLogo} />
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
