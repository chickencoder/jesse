import Head from 'next/head'
import Link from 'next/link'
import Avatar from '../components/avatar'
import Nav from '../components/nav'
import Bio from '../components/bio'
import Seo from '../components/seo'
import Footer from '../components/footer'
import Time from '../components/time'
import { getPosts } from '../lib/posts'
import { getSite } from '../lib/site'

export async function getStaticProps() {
  return {
    props: { posts: await getPosts(), site: await getSite() },
  }
}

export default function IndexPage({ posts = [], site }) {
  const {
    _site: { globalSeo, favicon },
  } = site
  return (
    <>
      <Head>
        <title>Jesse Sibley</title>
      </Head>
      <Seo
        favicon={favicon.url}
        title={globalSeo.fallbackSeo.title}
        description={globalSeo.fallbackSeo.description}
        twitter={globalSeo.twitterAccount}
      />
      <header className="max-w-md mx-auto px-4 mt-16 mb-8 space-y-6 dark:text-white">
        <Avatar className="mx-auto" />
        <section className="space-y-2">
          <h1 className="font-heading font-bold text-2xl tracking-tight">
            Hey, I'm Jesse
          </h1>
          <Nav />
        </section>
        <Bio />
      </header>
      <main className="max-w-md px-4 mx-auto">
        <ul className="space-y-8">
          {posts.map((post, index) => (
            <li key={index}>
              <h2>
                <Link href={post.slug}>
                  <a className="transition duration-100 ease-in-out font-medium border-b border-transparent hover:border-gray-900 dark:hover:border-gray-300">
                    {post.title}
                  </a>
                </Link>
              </h2>
              <Time
                className="text-sm text-gray-500 dark:text-gray-400"
                value={post.published}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}
