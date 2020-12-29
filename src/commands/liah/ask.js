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
      const contents = message.content.slice(`${prefix}문의 `.length)
    message.channel.send(locale.commands.ask.wait).then((m) => {
      if(contents == 0) return m.edit({ content: locale.commands.ask.donot})
       
            knex("users")
              .select("*")
              .limit(1)
              .then(() => {
                embed.addField(
                  locale.commands.ask.title,
                  locale.commands.ask.message.bind({
                 contents: contents, 
                  })
                )
        
                m.edit({ content: locale.commands.ask.title, embed })
              })
              const owner = client.users.cache.get('405714654065721344');
              owner.send(`문의\n 유저 : ${message.author.tag} \n 서버 : ${message.guild.name} \n 문의내용 : ${contents}`);
              
              const owner1 = client.users.cache.get('729895586840707213');
              owner1.send(`문의\n 유저 : ${message.author.tag} \n 서버 : ${message.guild.name} \n 문의내용 : ${contents}`);
              
              const owner2 = client.users.cache.get('330907706804273152');
              owner2.send(`문의\n 유저 : ${message.author.tag} \n 서버 : ${message.guild.name} \n 문의내용 : ${contents}`);
        }
     )}
    
  module.exports.props = {
    name: "ask",
    perms: "general",
    alias: ["문의"],
    args: [],
  }
  