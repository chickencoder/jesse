import Back from '../components/back'
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
      <Back />
      <header>
        <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">
          {post.title}
        </h1>
        <Time value={post.published} className="text-gray-500" />
      </header>
      <article
        className="prose prose-blue"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Footer />
    </div>
  )
}
