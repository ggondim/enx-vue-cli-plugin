const enx = require('@enx/env')();

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
