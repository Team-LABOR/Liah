/*
Codebase: wonderbot (https://github.com/wonderlandpark/wonderbot/blob/develop/src/index.js)
*/
const tools = require("./tools")
const config = require("./config")
const Bot = tools.bot.init
const locale = require("./locale")

// Handlers
process.on("unhandledRejection", (reason) => {
  console.error(reason)
})
process.on("uncaughtException", (err) => {
  console.error(err.stack)
})
process.on("warning", (err) => {
  console.error(err.stack)
})

// Init
new Bot(config, false)

// Prototype

String.prototype.bind = function (parameters, lang) {
  if (!lang) lang = "ko"
  let text = this
  const glob = text.match(/%(.*?)%/g)
  if (glob) {
    glob.forEach((key) => {
      const keyname = key.replace(/%/, "").replace(/%/, "")
      const string = String(locale[lang].global[keyname])
      if (!string) return
      text = text.replace(key, String(string) || "")
    })
  }
  const keys = text.match(/\{(.*?)\}/g)
  if (!keys) return this

  keys.forEach((key) => {
    const keyname = key.replace(/\{/, "").replace(/\}/, "")
    const string = String(parameters[keyname])
    if (!string) return
    text = text.replace(key, string || "")
  })

  return text
}
