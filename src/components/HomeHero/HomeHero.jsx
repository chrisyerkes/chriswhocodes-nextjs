import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faCodepen, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Clack from 'public/static-assets/images/sprites/sfx_clack_single.png';
import ClackClack from 'public/static-assets/images/sprites/sfx_clack_double.png';
import ArmLeft from 'public/static-assets/images/sprites/chris_arm_left.png';
import ArmRight from 'public/static-assets/images/sprites/chris_arm_right.png';
import Body from 'public/static-assets/images/sprites/chris_body_and_pugs.png';

const HomeHero = ({ children, className = 'content-section hero' }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="row social-row">
          <div className="col">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="svg-settings">
              <defs>
                <linearGradient id="linear-green-blue" gradientTransform="rotate(90)" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop className="linear-stop1" offset="0%"></stop>
                  <stop className="linear-stop2" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  id="linear-yellow-pink"
                  gradientTransform="rotate(110)"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop className="linear-stop1" offset="0%"></stop>
                  <stop className="linear-stop2" offset="100%"></stop>
                </linearGradient>
                <linearGradient id="linear-pink-blue" gradientTransform="rotate(110)" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop className="linear-stop1" offset="0%"></stop>
                  <stop className="linear-stop2" offset="100%"></stop>
                </linearGradient>
                <linearGradient id="linear-teal-blue" gradientTransform="rotate(110)" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop className="linear-stop1" offset="0%"></stop>
                  <stop className="linear-stop2" offset="100%"></stop>
                </linearGradient>
              </defs>
            </svg>
            <ul className="nav social-nav justify-content-end d-md-none d-lg-flex justify-content-lg-start">
              <li className="nav-item linkedin">
                <a href="#" className="nav-link">
                  {/* <i className="fab fa-linkedin-in"></i> */}
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="nav-item github">
                <a href="#" className="nav-link">
                  {/* <i className="fa-brands fa-github"></i> */}
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="nav-item codepen">
                <a href="#" className="nav-link">
                  {/* <i className="fa-brands fa-codepen"></i> */}
                  <FontAwesomeIcon icon={faCodepen} />
                </a>
              </li>
              <li className="nav-item twitter">
                <a href="#" className="nav-link">
                  {/* <i className="fab fa-twitter"></i> */}
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
          <div className="col-lg-7 order-last order-lg-first hero-left">
            <div className="row">
              <div className="col">
                <h1 className="d-none d-lg-block hero-title animation-toggle">Chris Yerkes</h1>
                <p className="hero-subtitle">
                  Front end developer specializing in lorem ipsum. I enjoy creating dolor sit amet and experimenting
                  with felis faucibus.
                </p>
                <p className="m-0 text-center text-lg-start">
                  <a href="#" className="btn btn-link has-arrow-right has-gradient-1">
                    Get in Touch <FontAwesomeIcon icon={faArrowRight} />
                    {/* <i className="fa-solid fa-arrow-right"></i> */}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 hero-right">
            <p className="h1 d-lg-none hero-title text-center">Chris Yerkes</p>
            <div className="chris-animated-container">
              <div className="sfx sfx-clack-single">
                <img src={Clack.src} alt="Keyboard clack sound effect" />
              </div>
              <div className="sfx sfx-clack-double">
                <img src={ClackClack.src} alt="Keyboard clack sound effect" />
              </div>
              <div className="character character-body">
                <img src={Body.src} alt="Chris and his pugs working on his laptop" />
              </div>
              <div className="character character-left-arm">
                <img src={ArmLeft.src} alt="Chris's left arm" />
              </div>
              <div className="character character-right-arm">
                <img src={ArmRight.src} alt="Chris's right arm" />
              </div>
              <div className="pug pug-henry"></div>
              <div className="pug pug-peppa"></div>
            </div>
            <ul className="nav social-nav d-none d-md-flex d-lg-none justify-content-center">
              <li className="nav-item linkedin">
                <a href="#" className="nav-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="nav-item github">
                <a href="#" className="nav-link">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="nav-item codepen">
                <a href="#" className="nav-link">
                  <i className="fa-brands fa-codepen"></i>
                </a>
              </li>
              <li className="nav-item twitter">
                <a href="#" className="nav-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default HomeHero;
