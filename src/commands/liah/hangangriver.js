const axios = require("axios")

module.exports.execute = async (
  client,
  message,
  locale,
  embed,
  _tools,
  knex
) => {
  var u = (
    await knex
        .select('*')
        .from('users')
        .where({ id: message.author.id })
)[0]

await knex
.update({
  money: Number(u['money']) + 50,
})
.where({ id: message.author.id })
.from('users')
  axios.get("http://hangang.dkserver.wo.tc/").then(function (x) {
    message.channel.send(locale.commands.hangangriver.wait).then((m) => {
      knex("users")
        .select("*")
        .limit(1)
        .then(() => {
          embed.addField(
            locale.commands.hangangriver.title,
            locale.commands.hangangriver.return.bind({
              river: x.data.temp,
            })
          )

          m.edit({ content: locale.commands.hangangriver.title, embed })
        })
    })
  })
}

module.exports.props = {
  name: "한강",
  perms: "general",
  alias: ["한강", "hanganriver"],
  args: [],
}