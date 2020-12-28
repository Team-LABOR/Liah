module.exports.execute = async (
  _client,
  message,
  locale,
  embed,
  _tools,
  knex
) => {
  message.channel.send(locale.commands.userinfo.wait).then((m) => {
    let _status = message.author.presence.clientStatus
    let clientstatus = []

    for (let key in _status) {
      key = key
        .replace("mobile", "모바일")
        .replace("desktop", "컴퓨터")
        .replace("web", "웹")
      clientstatus.push(key)
    }

    knex("users")
      .select("*")
      .limit(1)
      .then(() => {
        embed.addField(
          locale.commands.userinfo.title,
          locale.commands.userinfo.message.bind({
            name: message.author.username,
            tag: message.author.discriminator,
            id: message.author.id,
            avatar: message.author.avatarURL({ format: "png" }),
            status: message.author.presence.activities[0],
            client: clientstatus.join(", "),
          })
        )

        m.edit({ content: locale.commands.userinfo.title, embed })
      })
  })
}
module.exports.props = {
  name: "유저정보",
  perms: "general",
  alias: ["유저정보", "userinfo"],
  args: [],
}
