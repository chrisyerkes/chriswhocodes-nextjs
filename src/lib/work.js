import { getApolloClient } from 'lib/apollo-client';
import { gql } from '@apollo/client';

// const GET_WORK = gql`
//   query AllPostsQuery {
//     posts {
//       nodes {
//         title
//         content
//         date
//         uri
//       }
//     }
//   }
// `;

export const CASE_STUDY_FIELDS = gql`
  fragment CaseStudyFields on CaseStudy {
    caseStudyTitle
    slug
    caseStudyId
    finalImage {
      mediaItemUrl
    }
  }
`;

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    databaseId
    date
    isSticky
    postId
    slug
    title
  }
`;

export const GET_WORK_INDEX = gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const GET_WORK_ARCHIVE = gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const GET_WORK = gql`
  ${CASE_STUDY_FIELDS}
  query AllWorks {
    caseStudies(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...CaseStudyFields
          modified
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
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
 * getAllWorks
 */

const allWorksIncludesTypes = {
  all: GET_WORK,
  archive: GET_WORK,
  // index: GET_WORK_INDEX,
};

export async function getAllWorks(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allWorksIncludesTypes[queryIncludes],
  });

  const works = data?.data.caseStudies.edges.map(({ node = {} }) => node);

  return {
    works: Array.isArray(works) && works.map(mapWorkData),
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

/**
 * getworksPerPage
 */

export async function getWorksPerPage() {
  //If POST_PER_PAGE is defined at next.config.js
  if (process.env.POSTS_PER_PAGE) {
    console.warn(
      'You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
    );
    return Number(process.env.POSTS_PER_PAGE);
  }

  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_POST_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e) {
    console.log(`Failed to query post per page data: ${e.message}`);
    throw e;
  }
}

/**
 * getPageCount
 */

export async function getWorkPagesCount(works, worksPerPage) {
  const _worksPerPage = worksPerPage ?? (await getworksPerPage());
  return Math.ceil(works.length / _worksPerPage);
}

/**
 * sortStickyPosts
 */

export function sortStickyWorks(works) {
  return [...works].sort((work) => (work.isSticky ? -1 : 1));
}

/**
 * getPaginatedWorks
 */

export async function getPaginatedWorks({ currentPage = 1, ...options } = {}) {
  const { works } = await getAllWorks(options);
  const worksPerPage = await getWorksPerPage();
  const pagesCount = await getWorkPagesCount(works, worksPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      works: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = worksPerPage * (page - 1);
  const sortedWorks = sortStickyWorks(works);
  return {
    works: sortedWorks.slice(offset, offset + worksPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}
