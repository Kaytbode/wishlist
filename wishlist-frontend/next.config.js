module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:7071/api/:path*',
        },
      ]
    },
}