import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__contact-detail">
        Address: Shiles Farm, Sector Lane, Axminster, Devon, EX13 5SE, UK
      </p>
      <p className="footer__contact-detail">Tel: 01297 547698</p>
      <p className="footer__contact-detail">
        Email:
        <a className="footer__email" href="mailto:info@shilesfarm.co.uk">
          info@shilesfarm.co.uk
        </a>
      </p>
    </div>
  );
};

export default Footer;
