module.exports.execute = async (
  _client,
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
    let activity = message.author.presence.activities[0]
    let a = activity === undefined ? "상태메시지 없음" : activity.name === "Custom Status" ? activity.state : activity.name
    
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
            status: a,
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