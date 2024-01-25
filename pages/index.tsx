import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Helping Horse Ry: A passionate equestrian club in Helsinki
          </title>
        </Head>
        <Container>
          <Navbar />
          <Intro />
          <Intro />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: {
      allPosts,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
