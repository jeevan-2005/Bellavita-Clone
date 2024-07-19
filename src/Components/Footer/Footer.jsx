import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faPinterest,
  faPinterestP,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="upperDiv">
          <div className="bestSellers">
            <h3>BESTSELLERS</h3>

            <ul>
              <li>
                <a href="">Ultimate Perfume Box</a>
              </li>
              <li>
                <a href="">Perfume Gift Set For Men</a>
              </li>
              <li>
                <a href="">Perfume Gift Set For Women</a>
              </li>
              <li>
                <a href="">Under Eye Cream For Dark Circles</a>
              </li>
              <li>
                <a href="">Perfume For Men</a>
              </li>
              <li>
                <a href="">Perfume For Women</a>
              </li>
              <li>
                <a href="">Unisex Perfume</a>
              </li>
            </ul>
          </div>
          <div className="information">
            <h3>INFORMATION</h3>

            <ul>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Newsroom</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Refund & Returns</a>
              </li>
              <li>
                <a href="">Shipping Policy</a>
              </li>
              <li>
                <a href="">Bulk Order - GST Invoice</a>
              </li>
            </ul>
          </div>
          <div className="support">
            <h3>SUPPORT</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Order Tracking</a>
              </li>
              <li>
                <a href="">All Products</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="contactUs">
            <h3>CONTACT US</h3>
            <ul>
              <li>
                Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon,
                Haryana, India
              </li>
              <li>shop@bellavitaorganic.com</li>
              <li>+91-9311732440</li>
              <li>Timing: 10:00 AM to 7:00 PM, Monday to Sunday</li>
            </ul>
          </div>
          <div className="exclusive">
            <h3>EXCLUSIVE</h3>
            <div>
              <input
                type="email"
                name=""
                id=""
                placeholder="enter email here"
              />
              <p>
                Sign up here to get the latest news, updates and special offers
                delivered to your inbox.
              </p>
              <p>Plus, you will be the first to know about our discounts!</p>
            </div>
            <div className="socialIcons">
              <a href="">
                <FontAwesomeIcon icon={faFacebookF} className="icon facebook" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faPinterestP}
                  className="icon pinterest"
                />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} className="icon insta" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faYoutube} className="icon uTube" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">© 2024, <span><a href="">Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.).</a></span></div>
      </div>
    </footer>
  );
};

export default Footer;
