const enx = require('@enx/env')({
  injectProcessEnvToEnx: false,
});

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig
      .plugin('define')
      .tap(args => {
        args[0].enx = JSON.stringify(enx);
        return args;
      });
  });
}
