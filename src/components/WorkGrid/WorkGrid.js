import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import fpo1 from 'public/static-assets/images/fpo_featured-work.jpg';
import fpo2 from 'public/static-assets/images/fpo_work-item.jpg';

const WorkGrid = ({ children, className = 'content-section has-tinted-background my-work' }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="section-title">View my work</h2>
            <div className="work-wrapper d-block d-lg-flex featured-work">
              <div className="featured-work-image">
                <img src={fpo1.src} alt="Featured Work" className="img-fluid" />
              </div>
              <div className="featured-work-description">
                <h5>Featured</h5>
                <div className="d-flex flex-column justify-content-center h-100 description-wrapper">
                  <h3>Coffee by Benjamin</h3>
                  <p>An e-commerce application built with React & Shopify for a coffee roasting company.</p>
                  <p>
                    <a href="/project_01.html" className="btn btn-link btn-link-sm stretched-link has-arrow-right">
                      View Project <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid work-grid" style={{ columnGap: 80 + 'px', rowGap: 74 + 'px' }}>
          <div className="g-col-12 g-col-md-6 work-item">
            <div className="card">
              <div className="work-image">
                <img src={fpo2.src} alt="Work Item" className="img-fluid" />
              </div>
              <div className="work-description">
                <h3>Project Two</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, scelerisque nisi eu,
                  consectetur nisi.
                </p>
                <p>
                  <a href="#" className="btn stretched-link btn-link btn-link-sm">
                    View Project <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="g-col-12 g-col-md-6 work-item">
            <div className="card">
              <div className="work-image">
                <img src={fpo2.src} alt="Work Item" className="img-fluid" />
              </div>
              <div className="work-description">
                <h3>Project Three</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, scelerisque nisi eu,
                  consectetur nisi.
                </p>
                <p>
                  <a href="#" className="btn stretched-link btn-link btn-link-sm">
                    View Project <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="g-col-12 g-col-md-6 work-item">
            <div className="card">
              <div className="work-image">
                <img src={fpo2.src} alt="Work Item" className="img-fluid" />
              </div>
              <div className="work-description">
                <h3>Project Four</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, scelerisque nisi eu,
                  consectetur nisi.
                </p>
                <p>
                  <a href="#" className="btn stretched-link btn-link btn-link-sm">
                    View Project <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="g-col-12 g-col-md-6 work-item">
            <div className="card">
              <div className="work-image">
                <img src={fpo2.src} alt="Work Item" className="img-fluid" />
              </div>
              <div className="work-description">
                <h3>Project Five</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, scelerisque nisi eu,
                  consectetur nisi.
                </p>
                <p>
                  <a href="#" className="btn stretched-link btn-link btn-link-sm">
                    View Project <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="rgb-button-wrap">
              <a href="#" className="btn btn-gradient has-btn-gradient-1">
                View All Projects
              </a>
              <span></span>
            </p>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default WorkGrid;
