module.exports.execute = async (
  client,
  message,
  locale,
  embed,
  _tools,
  knex
) => {
  let user = (await knex("users").where({ id: message.author.id }))[0]
  embed.setDescription(
    locale.commands.wallet.message.bind({
      author: message.author.username,
      hasmoney: user.money,
    })
  )
  message.channel.send({ embed: embed })
}
module.exports.props = {
  name: "wallet",
  perms: "general",
  alias: ["돈", "지갑", "통장"],
  args: [],
}
