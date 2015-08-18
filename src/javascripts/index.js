// Note: The babel polyfill bloats FriggingBootstrap. If we could find a smaller
// polyfill or a polyfill for just the things we use it would save a lot of
// bytes.
require("babel-core/polyfill")

require("../stylesheets/index.styl")
console.log("FRIGGING BOOTSTRAP")

module.exports = {

  component(name) {
    return require(`./components/${name}.js`)
  },

}
