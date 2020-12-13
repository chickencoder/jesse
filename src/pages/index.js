import Head from 'next/head'
import Link from 'next/link'
import Avatar from '../components/avatar'
import Nav from '../components/nav'
import Bio from '../components/bio'
import Footer from '../components/footer'
import Time from '../components/time'
import { getPosts } from '../lib/posts'
import { format } from '../lib/time'

export async function getStaticProps() {
  return {
    props: { posts: await getPosts() },
  }
}

export default function IndexPage({ posts = [] }) {
  return (
    <div className="space-y-8">
      <Head>
        <title>Jesse Sibley</title>
      </Head>
      <header className="max-w-sm mx-auto mt-16 space-y-6 dark:text-white">
        <Avatar />
        <section className="space-y-2">
          <h1 className="font-heading font-bold text-2xl tracking-tighter">
            Hey, I'm Jesse
          </h1>
          <Nav />
        </section>
        <Bio />
      </header>
      <main className="max-w-sm mx-auto mb-16">
        <ul className="space-y-6">
          {posts.map((post, index) => (
            <li key={index}>
              <h2>
                <Link href={post.slug}>
                  <a className="font-medium border-b border-transparent dark:hover:border-gray-300">
                    {post.title}
                  </a>
                </Link>
              </h2>
              <Time
                className="text-sm text-gray-500 dark:text-gray-400"
                value={post._publishedAt}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
