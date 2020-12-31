import remark from 'remark'
import html from 'remark-html'
import { gql } from 'graphql-request'
import { client } from './client'

const GET_POSTS = gql`
  {
    allPosts {
      title
      slug
      content
      _publishedAt
      firstPublished
    }
  }
`

const GET_POST = gql`
  query($slug: String!) {
    post(filter: { slug: { eq: $slug } }) {
      title
      content
      _publishedAt
      firstPublished
    }
  }
`

export async function getPosts() {
  const { allPosts } = await client.request(GET_POSTS)
  const posts = allPosts.map(async (post) => {
    const result = await remark().use(html).process(post.content)
    return {
      ...post,
      published: post.firstPublished || post._publishedAt,
      content: result.toString(),
    }
  })
  return await Promise.all(posts)
}

export async function getPost(slug) {
  const { post } = await client.request(GET_POST, { slug })
  const result = await remark().use(html).process(post.content)
  return {
    ...post,
    published: post.firstPublished || post._publishedAt,
    content: result.toString(),
  }
}
