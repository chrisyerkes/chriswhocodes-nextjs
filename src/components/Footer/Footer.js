import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faCodepen, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';

import Section from 'components/Section';
import Container from 'components/Container';

import styles from './Footer.module.scss';

const Footer = () => {
  const { metadata = {}, recentPosts = [], categories = [] } = useSite();
  const { title } = metadata;

  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  return (
    /* <footer className={styles.footer}>
      {hasMenu && (
        <Section className={styles.footerMenu}>
          <Container>
            <ul className={styles.footerMenuColumns}>
              {hasRecentPosts && (
                <li>
                  <Link href="/posts/">
                    <a className={styles.footerMenuTitle}>
                      <strong>Recent Posts</strong>
                    </a>
                  </Link>
                  <ul className={styles.footerMenuItems}>
                    {recentPosts.map((post) => {
                      const { id, slug, title } = post;
                      return (
                        <li key={id}>
                          <Link href={postPathBySlug(slug)}>
                            <a>{title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              {hasRecentCategories && (
                <li>
                  <Link href="/categories/">
                    <a className={styles.footerMenuTitle}>
                      <strong>Categories</strong>
                    </a>
                  </Link>
                  <ul className={styles.footerMenuItems}>
                    {categories.map((category) => {
                      const { id, slug, name } = category;
                      return (
                        <li key={id}>
                          <Link href={categoryPathBySlug(slug)}>
                            <a>{name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              <li>
                <p className={styles.footerMenuTitle}>
                  <strong>More</strong>
                </p>
                <ul className={styles.footerMenuItems}>
                  <li>
                    <a href="/feed.xml">RSS</a>
                  </li>
                  <li>
                    <a href="/sitemap.xml">Sitemap</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Container>
        </Section>
      )}

      <Section className={styles.footerLegal}>
        <Container>
          <p>
            &copy; {new Date().getFullYear()} {title}
          </p>
        </Container>
      </Section>
    </footer> */
    <footer id="main-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 text-center text-sm-start mb-3 mb-sm-0">
            <p className="name">Chris Yerkes</p>
            <p className="copyright">&copy; {new Date().getFullYear()} Mops Digital, LLC. All rights reserved.</p>
          </div>
          <div className="col-sm-6 footer-social-nav">
            <ul className="nav justify-content-center justify-content-sm-end social-nav white-social-nav">
              <li className="nav-item linkedin">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="nav-item github">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="nav-item codepen">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faCodepen} />
                </a>
              </li>
              <li className="nav-item twitter">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
