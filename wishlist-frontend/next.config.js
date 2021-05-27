module.exports = {
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: 'http://localhost:7071/:path*',
        },
      ]
    },
}