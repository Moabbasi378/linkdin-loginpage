import logo from "../images/logo.png";

export function Bottom() {
  return (
    <footer>
      <div class="copyright">
        <img src={logo} />
        <p>&copy;</p>
        <p>2021</p>
      </div>
      <a href="#">About</a>
      <a href="#">Accessibility</a>
      <a href="#">User Agreement</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookie Policy</a>
      <a href="#">Copyright Policy</a>
      <a href="#">Brand Policy</a>
      <a href="#">Guest Controls</a>
      <a href="#">Community Guidelines</a>
      <a href="#">Language</a>
    </footer>
  );
}
