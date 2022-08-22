import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import Flickity from 'react-flickity-component';
import {
  faBusinessTime,
  faCode,
  faBolt,
  faWandMagicSparkles,
  faWrench,
  faPlug,
  faPalette,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';

const flickityOptions = {
  cellSelector: '.single-service',
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  prevNextButtons: false,
  on: {
    ready: function () {
      const serviceElements = document.querySelectorAll('.single-service');
      let maxHeight = 0;
      if (serviceElements.length > 0) {
        serviceElements.forEach(function (element) {
          let elHeight = element.offsetHeight;
          if (elHeight > maxHeight) {
            maxHeight = elHeight;
          }
        });
        serviceElements.forEach(function (element) {
          element.style.height = maxHeight + 'px';
        });
      }
    },
  },
};

const SkillSlider = ({ children, className = 'content-section services' }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="section-title">Services I offer</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Flickity
              className={'services-slider'} // default ''
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static // default false
            >
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-brands fa-wordpress-simple"></i> */}
                    <FontAwesomeIcon icon={faWordpressSimple} />
                  </div>
                  <h4>WordPress Consulting</h4>
                  <p>
                    Do you need help with your current WordPress website? Or have a need for an expert to help you bring
                    your WordPress project to life? I&rsquo;m your guy.
                  </p>
                </div>
              </div>
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-solid fa-business-time"></i> */}
                    <FontAwesomeIcon icon={faBusinessTime} />
                  </div>
                  <h4>WordPress Agency Sub-Contractor</h4>
                  <p>
                    Are you a web design agency looking for someone to bring your designs to life in the WordPress CMS
                    for your clients? I can take your finished designs and develop a fully responsive and search engine
                    optimized WordPress website.
                  </p>
                </div>
              </div>
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-solid fa-code"></i> */}
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <h4>WordPress Whole Site Development</h4>
                  <p>
                    I have been building fully scoped WordPress websites for over 15 years. I have the experience to
                    help you from any stage of your WordPress site development and bring it over the finish line.
                  </p>
                </div>
              </div>
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-solid fa-bolt"></i> */}
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <h4>Headless WordPress Development</h4>
                  <p>
                    The future of WordPress websites. Get the fastest performance possible by requesting a headless
                    WordPress website. This website is headless!
                  </p>
                </div>
              </div>
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-solid fa-wand-magic-sparkles"></i> */}
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                  </div>
                  <h4>WordPress Theme Customization</h4>
                  <p>
                    If you&rsquo;re looking for some help customizing a great theme you already have installed and
                    running on your WordPress website that just needs a little extra &ldquo;something,&rdquo; let me
                    help you shape the look and the functionality to your vision.
                  </p>
                </div>
              </div>
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-solid fa-wrench"></i> */}
                    <FontAwesomeIcon icon={faWrench} />
                  </div>
                  <h4>WordPress Website Maintenance</h4>
                  <p>
                    If you already have a WordPress website and need help with content or functionality updates, I can
                    help. I&rsquo;ve successfully helped hundreds of clients manage their websites in my 15+ years of
                    experience.
                  </p>
                </div>
              </div>
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-solid fa-plug"></i> */}
                    <FontAwesomeIcon icon={faPlug} />
                  </div>
                  <h4>WordPress Plugin Development</h4>
                  <p>
                    Sometimes the plugin you want, or need, doesn&rsquo;t exist despite WordPress&rsquo;s massive plugin
                    library. Let me help develop one from scratch, or I can help you find the perfect off-the-shelf
                    solution.
                  </p>
                </div>
              </div>
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-solid fa-palette"></i> */}
                    <FontAwesomeIcon icon={faPalette} />
                  </div>
                  <h4>WordPress Website Design</h4>
                  <p>
                    While I do not design websites myself (I just write code for them), I have many, many talented web
                    design partners that I work with that do.
                  </p>
                </div>
              </div>
              <div className="single-service text-center">
                <div className="card">
                  <div className="service-icon d-flex align-items-center justify-content-center mx-auto">
                    {/* <i className="fa-regular fa-file-code"></i> */}
                    <FontAwesomeIcon icon={faFileCode} />
                  </div>
                  <h4>General Web Development</h4>
                </div>
              </div>
            </Flickity>
            {/* <div className="services-slider">
              
            </div> */}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default SkillSlider;
