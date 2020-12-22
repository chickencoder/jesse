import { gql } from 'graphql-request'
import { client } from './client'

const SITE_QUERY = gql`
  {
    _site {
      globalSeo {
        siteName
        twitterAccount
        fallbackSeo {
          description
          title
        }
      }
      favicon {
        url
      }
    }
  }
`

export async function getSite() {
  return await client.request(SITE_QUERY)
}
