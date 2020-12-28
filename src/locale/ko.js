const Inko = require("inko")
const inko = new Inko()

const config = require("../config")
const commands = require("../commands/index.js")

module.exports = {
  language: {
    english: "Korean",
    native: "한국어",
    code: "ko",
  },
  commands: {
    help: {
      CMDDESC: "도움말 명령어를 표시합니다.",
      noCommand: "해당 명령어는 존재하지 않습니다.",
      commandInfo: "명령어 정보 - {cmd}",
      description: "명령어 설명",
      usage: "명령어 사용법",
      other: "명령어의 다른 이름들",
      docs: "문서",
      nodoc: "문서가 존재하지 않습니다.",
      help: "안녕하세요, 리아 봇입니다!",
      desc:
        "봇을 이용해주셔서 감사합니다. 해당 봇은 [원더 봇 오픈소스](https://github.com/wonderlandpark/wonderbot)를 기반으로 제작되었습니다.",
      more: "자세한 도움말보기",
      moreDesc:
        "`{prefix}도움 [명령어]`로 명령어의 사용법을 자세하게 알아볼 수 있습니다.",
      support: "유용한 링크",
      links: "[준비중](https://naver.com/)",
    },
    ping: {
      CMDDESC: "봇의 지연시간을 확인합니다.",
      ping: "봇의 지연시간을 확인하는 중 입니다...",
      pong: "퐁!",
      this: "🏓 퐁!",
      return:
        "<:ping:792295546186104853> 봇 지연시간: {botLatency}ms\n<:api:792294515725434890> API 지연시간: {APILatency}ms\n<:db:792294663406616577> DB 쿼리 지연시간: {DBLatency}ms",
    },
    corona: {
      CMDDESC: "대한민국의 코로나 현황을 보여줍니다.",
      wait: "잠시만 기다려 주세요!",
      title: "코로나!",
      sub: "<:corona:792294434526986300> 코로나!",
      return:
        "대한민국 총 확진자 수: {allcorona}명\n 어제 확진자 수: {yesterdaycorona}명\n 오늘 확진자 수(집계중): {todaycorona}명\n 어제 지금 시간 확진자 수 `-` 현재 지금 시간 확진자 수: {todayminusyesterday}명",
    },
    sat: {
      CMDDESC: "수능까지 남은 일 수를 보여줍니다.",
      wait: "잠시만 기다려 주세요!",
      title: "수능까지 남은 일 수!",
      return: "<:study:792294726476496906> 수능까지 {day}일 남았습니다!",
    },
    hangangriver: {
      CMDDESC: "현재 한강 수온을 보여줍니다.",
      wait: "잠시만 기다려주세요!",
      title: "한강수온",
      return: "<:river:792295586572664842> 현재 한강 수온은 `{river}℃` 입니다!",
    },
    say: {
      CMDDESC: "앵무새처럼 따라 말합니다.",
      wait: "잠시만 기다려주세요!",
      title: "말해!",
      bird: "나는 앵무새 리아!",
      return: "<:say:792304093158047744> {say}",
    },
    userinfo: {
      CMDDESC: "유저 정보를 보여줍니다.",
      wait: "잠시만 기다려주세요!",
      title: "유저정보!",
      message:
        "이름: {name}\n 태그 {tag}\n 아이디: {id}\n 프로필: [클릭]({avatar})\n지정상태: {status}\n클라이언트: {client}",
    },
    clear: {
      CMDDESC: "메시지를 삭제합니다",
      wait: "잠시만 기다려주세요!",
      title: "청소!",
      excess: "1부터 100까지의 숫자만 입력해주세요!",
      message:
        "<@{member}> `{number}` 개의 메시지를 삭제했습니다. (이 메시지는 잠시 후 사라집니다.)",
    },
    register: {
      CMDDESC: "봇 서비스에 가입합니다.",
      message:
        "이미 가입하셨습니다. 데이터 초기화 및 계약 철회는 {contact} 에서 하실 수 있습니다.",
      contact: "미지원",
      register: "가입하기",
      tos: "이용약관",
      privacy: "개인정보취급방침",
      to: "바로가기",
      yet:
        "<:service:792301678480326656> 아직 약관에 동의하지 않으셨습니다.\n해당 채널에 `동의합니다.`를 입력하시면 모든 약관을 수락하신걸로 간주됩니다.",
      start: "봇을 이용하시려면 반드시 다음 약관에 동의하셔야합니다.",
      code: "동의합니다.",
      timeout: "시간이 초과되어 취소되었습니다.",
      thanks:
        "봇의 약관을 동의해주셔서 감사합니다! 이제 모든 기능을 이용하실 수 있습니다.",
    },
    wallet: {
      CMDDESC: "현재 소지 금액을 확인합니다.",
      message:
        "<:money:792294639860187146> {author} 님의 소지 금액은 `{hasmoney}`원 입니다!",
    },
    ban: {
      CMDDESC: "유저를 서버에서 차단합니다.",
      alsoPerm:
        "해당 유저는 봇의 권한으로 추방할 수 없어요. 유저권한을 다시 확인해주세요.",
      wait: "해당 유저 차단을 시도중입니다.",
      user: "🙍 유저",
      mod: "👮 처리자",
      modDesc: "관리자: {mod} ({tag})",
      userDesc: "유저: {user} ({tag})",
      reason: "📃 정보",
      reasonDesc: "처벌 사유: {reason}",
      Success: "🔨 차단",
      notice:
        "당신은 **{guild}**에서 차단되셨습니다.\n사유 : {reason}\n처리자 : {mod}",
      error:
        "차단에 실패하였습니다. 리아의 권한을 확인해주세요.\n직접 차단해주시는걸 권장드립니다.",
      none: "없음.",
      why: "사유: {reason} | 처리자: {by}",
    },
    kick: {
      CMDDESC: "유저를 서버에서 추방합니다.",
      alsoPerm:
        "해당 유저는 봇의 권한으로 추방할 수 없어요. 유저권한을 다시 확인해주세요.",
      wait: "해당 유저 추방을 시도중입니다.",
      user: "🙍 유저",
      mod: "👮 처리자",
      modDesc: "관리자: {mod} ({tag})",
      userDesc: "유저: {user} ({tag})",
      reason: "📃 정보",
      reasonDesc: "처벌 사유: {reason}",
      Success: "🔨 추방",
      notice:
        "당신은 **{guild}**에서 추방되셨습니다.\n사유 : {reason}\n처리자 : {mod}",
      error:
        "추방에 실패하였습니다. 리아의 권한을 확인해주세요.\n직접 추방해주시는걸 권장드립니다.",
      none: "없음.",
      why: "사유: {reason} | 처리자: {by}",
    },
    serverinfo: {
      CMDDESC: "서버의 정보를 보여줍니다.",
      wait: "잠시만 기다려주세요!",
      title: "서버정보!",
      return:
        "정보\n**❯ 이름:**: {name}\n**❯ 아이디:**: {id}\n**❯ 관리자:**{owner}\n**❯ 지역:**: {area}\n**❯ 부스트 티어:**: {boost} \n**❯ 필터**: {filter}\n**❯ 보안 레벨:**: {Securitylevel}\n**❯ 만든일:**: {creatday}\n통계\n**❯ 역할 수:**: {rolesnumber}\n**❯ 이모지 수:**: {emojinumber}\n**❯ 일반 이모지 수**: {Generalemojinumber}\n**❯ 애니매이션 이모지 수**: {animationemojisnumber}\n**❯ 총 멤버 수**: {membernumber}\n**❯ 유저 수**: {usermembernumber}\n**❯ 봇 수**: {botmembernumber}\n**❯ 채팅 채널 수**: {channelnumber}\n**❯ 음성 채널 수**: {voicechannelnumber}\n**❯ 부스트 수**: {boostnumber}\n상태\n**❯ 온라인**: {online}\n**❯ 자리비움**: {idle}\n**❯ 다른 용무 중**: {dnd}\n**❯ 오프라인**:{offline}",
    },
    link: {
      tos: "https://naver.com",
      privacy: "https://pornhub.com/",
    },
  },
  error: {
    nodesc: "설명이 없습니다.",
    toLong: "출력 결과가 너무 길어 출력할 수 없습니다.",
    offline:
      "봇이 점검중입니다. 지금은 이용하실 수 없습니다. 불편을 드려 죄송합니다.\n예상된 점검 및 공지는 지원 서버에서 확인해주세요.\nhttps://discord.gg/8E3KQJsF7a",
    debug:
      "[{time}]\n**LIAH ERROR** - `{code}`\nCMD : `{cmd}`\nUSER : `{user}` (`{userid}`)\nGUILD : `{guild}` (`{guildid}`)\nCHANNEL : `{channel}`(`{channelid}`)\nURL : {url} \n```js\n{error}\n```\n DESC : \n```fix\nMSG CONTENT : {msg}\nBOT PERM : {perm}\n```",
    onerror: [
      "하루종일 Chip_#8346 의 은밀한 얘기를 듣다가 정신이 나가서 명령어를 수행하지못했어요.. 오류는 다음과 같아요.\n`{code}`",
      "와플을 먹을 생각에 한눈을 팔다가 의도치 않은 오류가 발생했어요.. 오류는 다음과 같아요.\n`{code}`",
      "제 이웃인 콜라곰이 넘어져서 서버에 콜라를 쏟아버렸어요.. 오류는 다음과 같아요.\n`{code}`",
      "삼계탕에 담겨있는 인삼을 먹다가 잠들어서 의도치않게 오류가 발생했어요.. 오류는 다음과 같아요.\n`{code}`",
      "의도치않은 오류가 발생되었어요. 오류는 다음과 같아요.\n`{code}`",
    ],
    noperm: "당신은 이 명령어를 실행할 권한이 없습니다.\n요구 권한 : {perms}",
    process: "이미 해당 작업을 진행중입니다. 작업을 마치고 실행해 주세요.",
    more: "저보다 돈도 많은 양반이 너무 조금 거는거아니에요?",
    blacklist:
      "당신은 리아 사용이 금지되었습니다.\n사유 : {reason}\n문의 및 이의 제기는 https://discord.gg/8E3KQJsF7a 에서 하실 수 있습니다.",
    cooldown:
      "명령어 사용이 쿨타임중입니다.\n`{time}`초 후에 사용 가능합니다\n쿨타임에 대해 더 알고 싶으시다면 `{prefix}쿨타임` 명령어를 사용하세요.",
    botperm: "이 명령어를 실행하기 위해서는 봇에게 {perms} 권한이 요구됩니다.",
    timeout: "시간이 초과되어 취소되었습니다.",
    nouser: "가입되어있지 않은 유저입니다.",
    already: "다른 작업이 진행중입니다. 작업을 완료한 후 명령어를 시도하세요.",
    usage: function (cmd, prefix) {
      var text = ""
      var desc = ""
      var args = (
        commands[cmd] ||
        commands[inko.en2ko(cmd)] ||
        commands[inko.ko2en(cmd)]
      ).props.args
      args.forEach((a) => {
        if (!a.type) return
        if (a.required) {
          text += `[${a.options ? a.options.join("|") : usageNames[a.name]}] `
          desc += `[${usageNames[a.name]} - ${
            usageNames[a.type.toString()]
          }](필수)\n`
        } else {
          text += `(${a.options ? a.options.join("|") : usageNames[a.name]})`
          desc += `[${usageNames[a.name]} - ${usageNames[a.type.toString()]}]\n`
        }
      })
      if (text.length === 0) {
        text += "(없음)"
        desc += "요구된 변수가 없습니다."
      }
      return `사용법 : \n\`\`\`fix\n${prefix}${cmd} ${text}\`\`\` \`\`\`ini\n${desc}\`\`\`
        `
    },
  },
}