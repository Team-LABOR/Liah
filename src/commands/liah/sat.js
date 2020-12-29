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
  message.channel.send(locale.commands.sat.wait).then((m) => {
    var t = new Date()
    var theDate = new Date(2021, 11, 03)
    var diffDate = theDate - t
    var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24))

    knex("users")
      .select("*")
      .limit(1)
      .then(() => {
        embed.addField(
          locale.commands.sat.title,
          locale.commands.sat.return.bind({
            day: result,
          })
        )

        m.edit({ content: locale.commands.sat.title, embed })
      })
  })
}
module.exports.props = {
  name: "수능",
  perms: "general",
  alias: ["수능", "CollegeScholasticAbilityTest"],
  args: [],
}