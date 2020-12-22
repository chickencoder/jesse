module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      const originalEntry = config.entry

      config.entry = async () => {
        const entries = { ...(await originalEntry()) }
        entries['./scripts/feed'] = './scripts/feed.js'
        return entries
      }
    }

    return config
  },
}
