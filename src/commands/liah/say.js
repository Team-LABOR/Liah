const { prefix } = require('../../config/client_example')
module.exports.execute = async (
    client,
    message,
    locale,
    embed,
    _tools,
    knex
  ) => {
    message.channel.send(locale.commands.say.wait).then((m) => {
        const text = message.content.slice(`${prefix}말해 `.length);
        
    
      knex("users")
        .select("*")
        .limit(1)
        .then(() => {
            embed.addField(
            locale.commands.say.bird,
            locale.commands.say.return.bind({
            say: text,  
            })
          )
  
          m.edit({ content: locale.commands.say.title, embed })
        })
    })
  }
  module.exports.props = {
    name: "말해",
    perms: "general",
    alias: ["말해"],
    args: [],
  }
  