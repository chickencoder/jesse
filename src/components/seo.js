import Head from 'next/head'

export default function SEO({
  title = `Hey, I'm Jesse`,
  description = '',
  twitter,
  favicon,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {twitter && <meta name="twitter:creator" content={twitter} />}
      <link rel="icon" href={favicon} type="image/jpeg" />
    </Head>
  )
}
