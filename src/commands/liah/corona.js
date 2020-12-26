module.exports.execute = async (
    client,
    message,
    locale,
    embed,
    _tools,
    knex
  ) => {
    message.channel.send(locale.commands.corona.wait).then((m) => {
        const request = require("request")


        let url = "https://apiv2.corona-live.com/stats.json"
        request(url, (error, response, body) => {
            let overview = JSON.parse(response.body).overview;
            overview = {
                total_confirmed_person: overview.confirmed[0], // 총 확진자수
                yesterday_confirmed_person: overview.confirmed[1], // 어제 확진자수
        
                current_confirmed_person: overview.current[0], // 현재 확진자수
                current_confirmed_person_diff: overview.current[1], // (어제 이 시간대 확진자 수 - 현재 이 시간대 확진자 수)
            }
    
        knex("users")
        .select("*")
        .limit(1)
        .then(() => {
            embed.addField(
            locale.commands.corona.return.bind({
              allcorona: overview.total_confirmed_person,
              yesterdaycorona: overview.yesterday_confirmed_person,
              todaycorona: overview.current_confirmed_person,
              todayminusyesterday: overview.current_confirmed_person_diff,
            })
          )
          
          m.edit({ content: locale.commands.corona.title, embed })
        })
        })
  
    })
  }
  module.exports.props = {
    name: "코로나",
    perms: "general",
    alias: ["코로나", "corona"],
    args: [],
  }
  