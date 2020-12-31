import Back from '../components/back'
import Seo from '../components/seo'
import Time from '../components/time'
import Footer from '../components/footer'
import { getPosts, getPost } from '../lib/posts'
import { getSite } from '../lib/site'

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug)
  const site = await getSite()
  return { props: { post, site } }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}

export default function Post({ post = {}, site = {} }) {
  const {
    _site: { globalSeo, favicon },
  } = site

  const snippet =
    post.content
      .slice(0, 140)
      .replace(/(<([^>]+)>)/gi, '')
      .trim() + '...'

  return (
    <>
      <Seo
        favicon={favicon.url}
        title={post.title}
        description={snippet}
        twitter={globalSeo.twitterAccount}
      />
      <div className="max-w-xl mx-auto p-4 space-y-8">
        <Back />
        <article className="space-y-8">
          <header className="space-y-4">
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">
              {post.title}
            </h1>
            <Time value={post.published} className="text-gray-500" />
          </header>
          <section
            className="prose prose-blue dark:prose-dark"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <Footer />
      </div>
    </>
  )
}
