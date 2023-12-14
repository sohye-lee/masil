/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: `@import "~@styles/main.scss";`,
      }
}

module.exports = nextConfig
