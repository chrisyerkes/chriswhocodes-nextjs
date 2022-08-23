import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import me from '../../../public/static-assets/images/cropped-square.jpg';

const ContactInfo = ({ children, className = 'content-section has-tinted-background contact-form' }) => {
  function onClickHandler(e) {
    e.preventDefault;
    // Animated portrait
    const portrait = document.querySelector('.contact-photo');
    const overlay = document.querySelector('.overlay');
    let winWidth = window.innerWidth;
    // Start the animation when the user clicks on the portrait
    if (portrait) {
      if (winWidth > 575) {
        let portraitWrap = portrait.querySelector('.portrait-wrap'),
          portraitWidth = portraitWrap.offsetWidth,
          portraitHeight = portraitWrap.offsetHeight,
          portraitLeft = portrait.getBoundingClientRect().left + 12,
          portraitTop = portrait.getBoundingClientRect().top;
        // Add's class that turns on invisible overlay that is used to toggle off animation
        overlay.classList.add('active');
        // Creating space that the portrait was in now that it's set to position fixed
        portraitWrap.style.width = portraitWidth + 'px';
        portraitWrap.style.height = portraitHeight + 'px';
        if (winWidth < 768) {
          portrait.style.paddingTop = portraitHeight + 27 + 'px';
          portraitWrap.style.left = portraitLeft + (portrait.offsetWidth - 300) / 2 - 12 + 'px';
        } else {
          portrait.style.paddingTop = portraitHeight + 22 + 'px';
          portraitWrap.style.left = portraitLeft + 'px';
        }
        portraitWrap.style.top = portraitTop + 'px';
        // Add class to move to starting point of css animation
        portrait.classList.add('loading');
        setTimeout(() => {
          // Adding class to prepare for css animation
          portrait.classList.add('loaded');
          setTimeout(() => {
            // Adding class that turns on css animation
            portrait.classList.add('animated');
          }, 750);
        }, 100);
      }
    }
    // Stop the animation when the user clicks on the overlay
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        e.preventDefault();
        let portraitWrap = portrait.querySelector('.portrait-wrap');
        // Removing class that turns on invisible overlay that is used to toggle off animation
        overlay.classList.remove('active');
        portrait.classList.add('closing');
        setTimeout(() => {
          // Resetting inline CSS styles
          portrait.style.paddingTop = '';
          portraitWrap.style.width = '';
          portraitWrap.style.height = '';
          portraitWrap.style.left = '';
          portraitWrap.style.top = '';
          // Removing class that turns on css animation
          portrait.classList.remove('animated');
          // Removing class that prepares for css animation
          portrait.classList.remove('loaded');
          // Removing class that moves to starting point of css animation
          portrait.classList.remove('loading');
          portrait.classList.remove('closing');
        }, 500);
      });
    }
  }
  return (
    <>
      <section className={className}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section-title">Let&rsquo;s build something together</h2>
            </div>
          </div>
          <div className="row justify-content-between flex-column-reverse flex-md-row">
            <div className="col-md-4 col-lg-4 contact-photo" onClick={onClickHandler}>
              <p tabIndex="0" className="portrait-wrap">
                <img src={me.src} className="img-fluid" alt="Photo of me, Chris Yerkes" />
              </p>
              <ul className="nav social-nav flex-column flex-sm-row align-items-center text-links">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    LinkedIn <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    CodePen <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    GitHub <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Twitter <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-7 mb-5 mb-md-0 form-container">
              <form>
                <div className="row">
                  <div className="col-sm-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="inputName1" placeholder="Your name..." />
                      <label htmlFor="inputName1">Your name</label>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="inputEmail1" placeholder="name@example.com" />
                      <label htmlFor="inputEmail1">Your email</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-4">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="inputMessage1"
                        placeholder="Your message..."
                        style={{ minHeight: 200 + 'px' }}
                      ></textarea>
                      <label htmlFor="inputMessage1">Your message</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" role="switch" id="inputPermission1" />
                      <label htmlFor="inputPermission1" className="form-check-label">
                        I agree to being contacted
                      </label>
                    </div>
                    <div className="form-check form-switch mb-4">
                      <input className="form-check-input" type="checkbox" role="switch" id="inputPermission2" />
                      <label htmlFor="inputPermission2" className="form-check-label">
                        Yes, I would like to receive occasional updates from Chris (optional)
                      </label>
                    </div>
                    <p className="rgb-button-wrap">
                      <button type="submit" className="btn btn-gradient has-btn-gradient-2">
                        Send a message
                      </button>
                      <span></span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {children}
      </section>
      <div className="overlay"></div>
    </>
  );
};

export default ContactInfo;
