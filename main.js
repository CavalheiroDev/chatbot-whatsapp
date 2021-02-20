const venom = require('venom-bot')
const banco = require('./banco')
const stages = require('./stages')

venom.create().then((client) => start(client))

function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      const stage = getStage(message.from)

      if (stage != 4) {
        let resp = stages.step[stage].obj.execute(
          message.from,
          message.body
        )
        for (let index = 0; index < resp.length; index++) {
          const element = resp[index]
          client.sendText(message.from, element)
        }
      }
    }
  })
}

function getStage(user) {
  if (banco.db[user]) {
    return banco.db[user].stage
  } else {
    banco.db[user] = {
      stage: 0
    }
    return banco.db[user].stage
  }
}