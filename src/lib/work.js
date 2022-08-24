import { getApolloClient } from 'lib/apollo-client';

const GET_WORK = gql`
  query AllPostsQuery {
    posts {
      nodes {
        title
        content
        date
        uri
      }
    }
  }
`;

export async function getWorkByUri(uri) {
  const apolloClient = getApolloClient();
  // const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let workData;
  // let seoData;

  try {
    workData = await apolloClient.query({
      query: GET_WORK,
      variables: {
        uri,
      },
    });
  } catch (e) {
    console.log(`[works][getWorkByUri] Failed to query work data: ${e.message}`);
    throw e;
  }

  if (!workData?.data.page) return { page: undefined };

  // const works = response?.data?.posts?.nodes;
  const works = [workData?.data.page].map(mapWorkData)[0];

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  // if (process.env.WORDPRESS_PLUGIN_SEO === true) {
  //   try {
  //     seoData = await apolloClient.query({
  //       query: QUERY_PAGE_SEO_BY_URI,
  //       variables: {
  //         uri,
  //       },
  //     });
  //   } catch (e) {
  //     console.log(`[pages][getPageByUri] Failed to query SEO plugin: ${e.message}`);
  //     console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
  //     throw e;
  //   }

  //   const { seo = {} } = seoData?.data?.page || {};

  //   page.metaTitle = seo.title;
  //   page.description = seo.metaDesc;
  //   page.readingTime = seo.readingTime;

  //   // The SEO plugin by default includes a canonical link, but we don't want to use that
  //   // because it includes the WordPress host, not the site host. We manage the canonical
  //   // link along with the other metadata, but explicitly check if there's a custom one
  //   // in here by looking for the API's host in the provided canonical link

  //   if (seo.canonical && !seo.canonical.includes(apiHost)) {
  //     page.canonical = seo.canonical;
  //   }

  //   page.og = {
  //     author: seo.opengraphAuthor,
  //     description: seo.opengraphDescription,
  //     image: seo.opengraphImage,
  //     modifiedTime: seo.opengraphModifiedTime,
  //     publishedTime: seo.opengraphPublishedTime,
  //     publisher: seo.opengraphPublisher,
  //     title: seo.opengraphTitle,
  //     type: seo.opengraphType,
  //   };

  //   page.robots = {
  //     nofollow: seo.metaRobotsNofollow,
  //     noindex: seo.metaRobotsNoindex,
  //   };

  //   page.twitter = {
  //     description: seo.twitterDescription,
  //     image: seo.twitterImage,
  //     title: seo.twitterTitle,
  //   };
  // }

  return {
    works,
  };
}

/**
 * mapWorkData
 */

export function mapWorkData(work = {}) {
  const data = { ...work };

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  if (data.parent) {
    data.parent = data.parent.node;
  }

  if (data.children) {
    data.children = data.children.edges.map(({ node }) => node);
  }

  return data;
}
