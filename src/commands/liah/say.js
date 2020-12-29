const { prefix } = require("../../config/client")
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
  message.channel.send(locale.commands.say.wait).then((m) => {
    const text = message.content.slice(`${prefix}말해 `.length)

    knex("users")
      .select("*")
      .limit(1)
      .then(() => {
        embed.addField(
          locale.commands.say.bird,
          locale.commands.say.return.bind({
            say: text,
          })
        )

        m.edit({ content: locale.commands.say.title, embed })
      })
  })
}
module.exports.props = {
  name: "말해",
  perms: "general",
  alias: ["말해"],
  args: [],
}
