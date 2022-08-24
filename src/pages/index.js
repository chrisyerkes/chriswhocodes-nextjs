import useSite from 'hooks/use-site';
// import { getPaginatedPosts } from 'lib/posts';
import { getPaginatedWorks } from 'lib/work';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
// import Header from 'components/Header';
import HomeHero from 'components/HomeHero';
import SkillSlider from 'components/ServiceSlider';
import WorkGrid from 'components/WorkGrid';
import SkillsList from 'components/SkillsList';
import ContactInfo from 'components/ContactInfo';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from 'styles/pages/Home.module.scss';

export default function Home({ works, pagination }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <HomeHero />
      <SkillSlider />
      <WorkGrid />
      <SkillsList />
      <ContactInfo />
      {/* <Header>
        <h1
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </Header> 

      <Section>
        <Container>
          <h2 className="sr-only">Posts</h2>
          <ul className={styles.posts}>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
      </Section> */}
      <ul className="test">
        {works.map((post) => {
          return (
            <li key={post.slug}>
              {/* <PostCard post={post} /> */}
              <h2>{post.caseStudyTitle}</h2>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const { works, pagination } = await getPaginatedWorks({
    queryIncludes: 'archive',
  });
  return {
    props: {
      works,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
