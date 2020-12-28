module.exports.execute = async (
  client,
  message,
  locale,
  embed,
  tools,
  knex
) => {
  if (!message.data.args)
    return message.reply(
      locale.error.usage(message.data.cmd, message.data.prefix)
    )
  const blacks = await knex("blacklist")
  const user = message.mentions.members.first()
    ? message.mentions.members.first().id
    : message.data.arg[1]

  if (["add", "추가", "a"].includes(message.data.arg[0])) {
    if (!user) return message.reply("유저 인자가 비었습니다.")
    if (blacks.find((r) => r.id === user))
      return message.reply("이미 존재하는 유저입니다.")
    await knex("blacklist").insert({
      id: user,
      why: message.content
        .replace(message.data.prefix, "")
        .split(" ")
        .splice(4)
        .join(" "),
    })
    return message.reply(
      `BLACKLIST ADDED | ID: ${user} | REASON: ${message.content
        .replace(message.data.prefix, "")
        .split(" ")
        .splice(4)
        .join(" ")}`
    )
  } else if (["remove", "삭제", "rm"].includes(message.data.arg[0])) {
    if (!user) return message.reply("유저 인자가 비었습니다.")
    if (!blacks.find((r) => r.id === user))
      return message.reply("존재하지않는 유저입니다.")
    await knex("blacklist").where({ id: user }).del()
    return message.reply(`BLACKLIST REMOVED | ID: ${user}`)
  } else
    return message.reply(
      locale.error.usage(message.data.cmd, message.data.prefix)
    )
}

module.exports.props = {
  name: "blacklist",
  perms: "dev",
  alias: ["블랙리스트"],
  args: [
    {
      name: "option",
      type: "option",
      required: true,
      options: ["add", "list", "remove"],
    },
    {
      name: "user",
      type: "user",
      required: true,
    },
  ],
}
