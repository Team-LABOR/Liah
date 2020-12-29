const moment = require("moment");
require("moment-duration-format");


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
      const duration = moment.duration(client.uptime).format(" D [일], H [시], m [분], s [초]");
    message.channel.send(locale.commands.botinfo.wait).then((m) => {
      
      knex("users")
        .select("*")
        .limit(1)
        .then(() => {
          embed.addField(
                locale.commands.botinfo.title,
                locale.commands.botinfo.message.bind({
                name: client.user.username,
                tag: client.user.discriminator,
                status: client.presence.status,
                uptime: duration,
                github: "https://github.com/Team-LABOR/Liah",
                koreanbots: "https://naver.com/",
                supportserver: "https://discord.gg/8E3KQJsF7a"
            })
          )
  
          m.edit({ content: locale.commands.botinfo.title, embed })
        })
    })
  }
  module.exports.props = {
    name: "봇정보",
    perms: "general",
    alias: ["봇정보", "botinfo"],
    args: [],
  }
  