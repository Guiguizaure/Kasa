import logo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <>
      <footer>
        <figure
          className="logo-footer"
          style={{ backgroundImage: `url(${logo})` }}
        ></figure>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};

export default Footer;
