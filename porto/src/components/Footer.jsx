const Footer = () => {
  return (
    <>
      <div className=" footer">
        <div className="footer-area container">
          <div className="content">
            <div className="col-one ">
              <h2>Newsletter</h2>
              <p>
                Keep up on our always evolving product features and technology.
                Enter your e-mail address and subscribe to our newsletter.
              </p>
              <div className="btn">
                <input type="text" value="Email Address" />
                <button>GO!</button>
              </div>
            </div>
            <div className="col-two">
              <h2>Top 5 FAQs</h2>
              <ul>
                <li>
                  <a href="#">Technical support contacts?</a>
                </li>
                <li>
                  <a href="#">How do I know the date of my delivery?</a>
                </li>
                <li>
                  <a href="#">My product did not arrive?</a>
                </li>
                <li>
                  <a href="#">
                    What are the payment methods? 
                  </a>
                </li>
                <li>
                  <a href="#">
                     Product availability?
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-three">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <i class="fa-solid fa-circle-dot"></i> 
                  <a href="#">234 Street Name, City Name</a>
                </li>
                <li>
                  <i class="fa-brands fa-whatsapp"></i>
                  <a href="#">(800) 123-4567</a>
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  <a href="#">mail@example.com</a>
                </li>
              </ul>
            </div>
            <div className="col-four">
              <h2>Follow Us</h2>
              <div className="navbar">
                <ul>
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
        </div>
      </div>
    </>
  );
};

export default Footer;
