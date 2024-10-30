 
 

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="//www.portotheme.com/wordpress/porto/classic-original/wp-content/themes/porto/images/logo/logo_black.png"
            alt="Logo"
          />
        </div>
        <div className="menu">
          <div className="top-menu">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <span>|</span>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <span>|</span>
              <li>
                <a href="#">(123) 456-789</a>
              </li>
              <span>|</span>
              <li>
                <a href="#">search</a>
              </li>
            </ul>
          </div>
          <div className="bottom-menu">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="">ELEMENTS</a>
              </li>
              <li>
                <a href="#">PAGES</a>
              </li>
              <li>
                <a href="/blog">BLOG</a>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li>
                <a href="#">BUYPROTO !</a>
              </li>
              <li></li>
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
