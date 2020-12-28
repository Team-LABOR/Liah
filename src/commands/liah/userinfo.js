module.exports.execute = async (
    client,
    message,
    locale,
    embed,
    _tools,
    knex
  ) => {
    message.channel.send(locale.commands.userinfo.wait).then((m) => {
        let clientstatus;
        
        let status = message.author.presence.clientStatus

for(let key in status) {
    let statusObj = status[key]
    clientstatus = (key+": " +statusObj)
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
            avatar: message.author.avatarURL({format: "png"}),
            status: clientstatus,
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
  