# enx-vue-cli-plugin
Vue CLI plugin for Enx injection during webpack configuration

See [Enx docs for front-end usage](https://github.com/NOALVO/enx#in-front-end-%EF%B8%8F)

### Customizing enx options

Override [enx options](https://github.com/NOALVO/enx#overriding-load-options) in file `vue.config.js`:

```javascript
module.exports = {
  ...
  pluginOptions: {
    enx: {
      cwd: './config',
      debug: true
    },
  },
```

### ESLint

Disable ESLint warnings for `enx` global variable by setting the following config into your ESLint config file:

```javascript
globals: {
  enx: true,
}
```

### Vue global variable

Consider inject enx variable into your Vue instance using your main Vue App props (so you'd access it through `this.$root.enx`) or using Vue prototype as below:

```javascript
// main.js
Vue.prototype.enx = enx;

// any component or view file
const anyConfig = this.enx.config;
```
