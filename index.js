const load = require('@enx/env');

const DEFAULT_PLUGIN_OPTIONS = {
  injectProcessEnvToEnx: false,
};

module.exports = (api, options = {}) => {
  let _options = DEFAULT_PLUGIN_OPTIONS;
  if (options && options.pluginOptions && options.pluginOptions.enx) {
    _options = Object.assign(_options, JSON.parse(JSON.stringify(options.pluginOptions.enx)));
  }
  const enx = load(_options);

  api.chainWebpack(webpackConfig => {
    webpackConfig
      .plugin('define')
      .tap(args => {
        args[0].enx = JSON.stringify(enx);
        return args;
      });
  });
}
