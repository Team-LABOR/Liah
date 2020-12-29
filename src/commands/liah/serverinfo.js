const moment = require("moment")
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
  message.channel.send(locale.commands.serverinfo.wait).then((m) => {
    const filterLevels = {
      DISABLED: "Off",
      MEMBERS_WITHOUT_ROLES: "No Role",
      ALL_MEMBERS: "Everyone",
    }

    const verificationLevels = {
      NONE: "None",
      LOW: "Low",
      MEDIUM: "Medium",
      HIGH: "(╯°□°）╯︵ ┻━┻",
      VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻",
    }

    const members = message.guild.members.cache
    const channels = message.guild.channels.cache
    const emojis = message.guild.emojis.cache

    knex("users")
      .select("*")
      .limit(1)
      .then(() => {
        embed.addField(
          locale.commands.serverinfo.title,
          locale.commands.serverinfo.return.bind({
            name: message.guild.name,
            id: message.guild.id,
            owner: message.guild.owner.user.tag,
            area: message.guild.region,
            filter: filterLevels[message.guild.explicitContentFilter],
            Securitylevel: verificationLevels[message.guild.verificationLevel],
            creatday:
              moment(message.guild.createdTimestamp).format("LT") +
              moment(message.guild.createdTimestamp).format("LL") +
              moment(message.guild.createdTimestamp).fromNow(), 
            emojinumber: message.guild.emojis.cache.size,
            Generalemojinumber: emojis.filter((emoji) => !emoji.animated).size,
            animationemojisnumber: emojis.filter((emoji) => emoji.animated)
              .size,
            membernumber: message.guild.memberCount,
            usermembernumber: members.filter((member) => !member.user.bot).size,
            botmembernumber: members.filter((member) => member.user.bot).size,
            textchannelnumber: channels.filter(
              (channel) => channel.type === "text"
            ).size,
            voicechannelnumber: channels.filter(
              (channel) => channel.type === "voice"
            ).size,
            boostnumber: message.guild.premiumSubscriptionCount,
            online: members.filter(
              (member) => member.presence.status === "online"
            ).size,
            idle: members.filter((member) => member.presence.status === "idle")
              .size,
            dnd: members.filter((member) => member.presence.status === "dnd")
              .size,
            offline: members.filter(
              (member) => member.presence.status === "offline"
            ).size,
          })
        )

        m.edit({ content: locale.commands.serverinfo.title, embed })
      })
  })
}

module.exports.props = {
  name: "서버정보",
  perms: "general",
  alias: ["서버정보", "serverinfo"],
  args: [],
}