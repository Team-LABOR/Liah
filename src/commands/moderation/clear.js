const { prefix } = require('../../config/client_example')

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
    
     
var clearnumber = message.content.slice(`${prefix}청소 `.length)
var isNum = !isNaN(clearnumber)

    if (isNum && (clearnumber <= 0.9 || 99.9 < clearnumber)) {
      message.channel.send(locale.commands.clear.excess)
      return
    } else if (!isNum) {
      
      if (message.content.split("<@").length == 2) {  
        if (isNaN(message.content.split(" ")[2])) return

        var user = message.content.split(" ")[1].split("<@!")[1].split(">")[0]
        var count = parseInt(message.content.split(" ")[2]) + 1
        let _cnt = 0

        message.channel.messages.fetch().then((collected) => {
          collected.every((msg) => {
            if (msg.author.id == user) {
              msg.delete()
              ++_cnt
            }
            return !(_cnt == count)
          })
        })
      }
    } else {
        message.channel
        .bulkDelete(parseInt(clearnumber) + 1)
    }
             knex("users")
               .select("*")
               .limit(1)
               .then(() => {
                   embed.addField(
                   locale.commands.clear.title,
                   locale.commands.clear.message.bind({
                       member: message.author.id,
                       number: parseInt(clearnumber),
                   })
                 )
         
                     message.channel.send({ content: locale.commands.clear.title, embed }).then((msg) => msg.delete({ timeout: 3000 }))
               })
        
        .catch(console.error)
    }
  module.exports.props = {
    name: "청소",
    perms: "general",
    alias: ["청소"],
    args: [],
  }
  