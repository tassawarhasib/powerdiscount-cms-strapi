module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),

    //! add
    // socket: '/tmp/nginx.socket', // only use if absolutely required
    // emitErrors: false,
    // url: env('PUBLIC_URL', 'https://api.example.com'),
    // proxy: env.bool('IS_PROXIED', true),
    // cron: {
    //   enabled: env.bool('CRON_ENABLED', false),
    // },
    //! add

  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
