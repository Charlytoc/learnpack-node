const { plugin } = require("learnpack-root-plugin/plugin")

module.exports = plugin({
    language: "node",
    compile: require('./compile'),
    test: require('./test'),
})