const knex = require("../database/knex")
module.exports = class LIAH {
  constructor(config, devMode) {
    const Discord = require("discord.js")
    const client = new Discord.Client(config.client.app)
    const tools = require("../")
    const logger = tools.logger
    client.webhook = new Discord.WebhookClient(
      config.client.webhook.error.id,
      config.client.webhook.error.token
    )

    client.once("ready", async () => {
      client.onlineMode = true
      if (!client.shard) {
        console.error("Only Shard Allowed")
        process.exit(0)
      }

      await knex("users").update({ action: 0 })

      // Fetch for all Guild
      const g = await tools.database("guilds")
      client.guilds.cache.forEach(async (guild) => {
        if (!g.find((r) => r.id === guild.id)) {
          console.log(`[INSERT] NEW GUILD: ${guild.name}`)
          await tools.database("guilds").insert({ id: guild.id })
        }
      })
    })

    client.on("message", async (message) => {
      tools.bot.handler(client, message, config, devMode)
    })

    client.on("guildCreate", async (guild) => {
      if (guild.shardID !== client.guilds.cache.first().shardID) return
      const hello = await client.shard.fetchClientValues("guilds.cache.size")
      const g = await knex("guilds")
      if (!g.find((r) => r.id === guild.id)) {
        console.log(`[INSERT] NEW GUILD: ${guild.name}`)
        await knex("guilds").insert({ id: guild.id })
      }
      const invites = await guild
        .fetchInvites()
        .then((r) => r.first())
        .catch(() => null)
      client.webhook.send(
        `**NEW GUILD**: TOTAL: ${hello.reduce(
          (prev, val) => prev + val,
          0
        )}\nNAME: ${guild.name}\nOWNER: ${
          (await client.users.fetch(guild.ownerID)).tag
        }\nMEMBER: ${guild.memberCount}\nBOTCOUNT: ${
          guild.members.cache.filter((r) => r.user.bot).size
        }\nBOTS: ${guild.members.cache
          .filter((r) => r.user.bot)
          .map((r) => r.user.username)
          .join(", ")}\ndiscord.gg/${
          invites ? invites.code : "null"
        }\n\n\n--------------------------------------`.slice(0, 1999)
      )
    })

    client.on("guildDelete", async (guild) => {
      if (guild.shardID !== client.guilds.cache.first().shardID) return
      const hello = await client.shard.fetchClientValues("guilds.cache.size")

      const invites = await guild
        .fetchInvites()
        .then((r) => r.first())
        .catch(() => null)

      client.webhook.send(
        `**LEFTED GUILD**: TOTAL: ${hello.reduce(
          (prev, val) => prev + val,
          0
        )}\nNAME: ${guild.name}\nOWNER: ${
          (await client.users.fetch(guild.ownerID)).tag
        }\nMEMBER: ${guild.memberCount}\nBOTCOUNT: ${
          guild.members.cache.filter((r) => r.user.bot).size
        }\nBOTS: ${guild.members.cache
          .filter((r) => r.user.bot)
          .map((r) => r.user.username)
          .join(", ")}\ndiscord.gg/${
          invites ? invites.code : "null"
        }\n\n\n--------------------------------------`.slice(0, 1999)
      )
    })
    client.login(config.client.token)
  }
}
