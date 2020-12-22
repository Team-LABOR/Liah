module.exports.database = require("./database/knex")

module.exports.bot = {
  init: require("./bot/init"),
  handler: require("./bot/handler"),
  embed: require("./bot/embed"),
  customEmbed: require("./bot/customEmbed"),
}

require("@wonderbot/format-date")

Object.keys(require("@wonderbot/utils")).forEach((t) => {
  module.exports[t] = require("@wonderbot/utils")[t]
})
