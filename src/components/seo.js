import Head from 'next/head'

export default function SEO({ title = `Hey, I'm Jesse`, description = '' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}
