import remark from 'remark'
import html from 'remark-html'
import { gql, GraphQLClient } from 'graphql-request'

const GET_POSTS = gql`
  {
    allPosts {
      title
      slug
      _publishedAt
    }
  }
`

const GET_POST = gql`
  query($slug: String!) {
    post(filter: { slug: { eq: $slug } }) {
      title
      _publishedAt
      content
    }
  }
`

const client = new GraphQLClient(process.env.API_URL, {
  headers: {
    authorization: `Bearer ${process.env.API_KEY}`,
  },
})

export async function getPosts() {
  const { allPosts } = await client.request(GET_POSTS)
  return allPosts
}

export async function getPost(slug) {
  const { post } = await client.request(GET_POST, { slug })
  const result = await remark().use(html).process(post.content)
  return {
    ...post,
    content: result.toString(),
  }
}
