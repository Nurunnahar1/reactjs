import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container header-area">
        <div className="logo">
          <img
            src="//www.portotheme.com/wordpress/porto/classic-original/wp-content/themes/porto/images/logo/logo_black.png"
            alt=""
          />
        </div>
        <div className="menu">
          <div className="contact-us">
            <ul>
              <li>
                <a href="">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <span className="pipe">|</span>
              <li>
                <a href="">(123) 456-789</a>
              </li> 
              <span className="pipe">|</span>
              <li>
                <a href="">Contact Us</a>
              </li> 
              <span className="pipe">|</span>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>

          <div className="navbar">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <a href="#">ELEMENTS</a>
              </li>
              <li>
                <a href="#">FEATURES</a>
              </li>
              <li>
                <a href="#">PAGES</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li>
                <a href="#">BUY PORTO!</a>
              </li>

              <li className="set-icon">
                <a href="" className="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="set-icon">
                <a href="" className="icon">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="set-icon">
                <a href="" className="icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
