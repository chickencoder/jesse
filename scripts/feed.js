import { Feed } from 'feed'
import { getPosts } from '../src/lib/posts'
import { getSite } from '../src/lib/site'
import { writeFileSync } from 'fs'

const URL = 'https://jessesibley.com/'

async function generate() {
  const { _site: site } = await getSite()
  const feed = new Feed({
    title: site.globalSeo.siteName,
    description: site.globalSeo.fallbackSeo.description,
    id: URL,
    link: URL,
    language: 'en',
    favicon: site.favicon.url,
    author: {
      name: 'Jesse Sibley',
      email: 'jessesibley@hey.com',
    },
  })

  const posts = await getPosts()
  posts.forEach((post) => {
    const postUrl = URL + post.slug
    feed.addItem({
      title: post.title,
      id: postUrl,
      link: postUrl,
      content: post.content,
    })
  })

  writeFileSync('./public/feed.xml', feed.rss2())
}

generate()
