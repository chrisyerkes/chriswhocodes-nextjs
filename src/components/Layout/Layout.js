// import FooterScripts from 'components/FooterScripts/FooterScripts';
import Script from 'next/script';

import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import styles from './Layout.module.scss';

import useSite from 'hooks/use-site';
import { helmetSettingsFromMetadata } from 'lib/site';

import TemplateHeader from 'components/TemplateHeader';
// import Nav from 'components/Nav';
import Main from 'components/Main';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  const { homepage, metadata = {} } = useSite();

  if (!metadata.og) {
    metadata.og = {};
  }

  metadata.og.url = `${homepage}${asPath}`;

  const helmetSettings = {
    defaultTitle: metadata.title,
    titleTemplate: process.env.WORDPRESS_PLUGIN_SEO === true ? '%s' : `%s - ${metadata.title}`,
    ...helmetSettingsFromMetadata(metadata, {
      setTitle: false,
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          href: '/feed.xml',
        },

        // Favicon sizes and manifest generated via https://favicon.io/

        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        },
      ],
    }),
  };

  return (
    <div className={styles.layoutContainer}>
      <Helmet {...helmetSettings} />
      <TemplateHeader className="position-absolute w-100 top-0 start-0" />
      {/* <Nav /> */}

      <Main>{children}</Main>

      <Footer />
      {/* <FooterScripts url="/static-assets/js/flickity.pkgd.min.js" /> */}
      {/* <FooterScripts url="/static-assets/js/bootstrap.bundle.min.js" /> */}
      {/* <FooterScripts url="/static-assets/js/functions.js" defer={true} className="remove" /> */}
      {/* investigate getting bootstrap js modules to work in nextjs app. check bookmark in mops digital chrome for article */}
      <Script url="/static-assets/js/flickity.pkgd.min.js" strategy="lazyOnload" />
      <Script src="/static-assets/js/functions.js" strategy="lazyOnload" />
    </div>
  );
};

export default Layout;
