// Note: The babel polyfill bloats FriggingBootstrap. If we could find a smaller
// polyfill or a polyfill for just the things we use it would save a lot of
// bytes.
try {require("babel-core/polyfill")} catch (e) {}

require("../stylesheets/index.styl")

module.exports = {

  component(name) {
    return require(`./components/${name}.js`)
  },

}
