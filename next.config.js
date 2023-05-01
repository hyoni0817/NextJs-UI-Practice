const { withSentryConfig } = require('@sentry/nextjs');
const withPlugins = require('next-compose-plugins');

const moduleExports = {
  reactStrictMode: true,
  swcMinify: true,
};

const sentryWebpackPluginOptions = {
  silent: true,
};

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withSentryConfig(withPlugins([], nextConfig), moduleExports, sentryWebpackPluginOptions);
