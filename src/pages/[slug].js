import Link from 'next/link'
import Time from '../components/time'
import Footer from '../components/footer'
import { getPosts, getPost } from '../lib/posts'

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug)
  return { props: { post } }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: true,
  }
}

export default function Post({ post }) {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-8">
      <nav className="py-8">
        <Link href="/">
          <a
            className="transition duration-100 ease-in-out text-gray-500 dark:text-gray-300 text-sm rounded-full px-3 py-1 bg-gray-100 hover:bg-gray-200
          dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            &larr; Back Home
          </a>
        </Link>
      </nav>
      <header>
        <h1 className="font-heading font-bold text-3xl mb-3">{post.title}</h1>
        <Time value={post._publishedAt} className="text-gray-500" />
      </header>
      <article
        className="prose prose-blue"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Footer />
    </div>
  )
}
