const sentences = require('../sentences/sentences')
const banco = require('../banco')

function execute(user, msg) {
  if (msg == '1') {
    banco.db[user].stage = 2
    return [sentences.respFamily]
  }

  if (msg == '2') {
    banco.db[user].stage = 2
    return [sentences.respFriend]
  }

  if (msg == '3') {
    banco.db[user] = 2
    return [sentences.respClient]
  }

  if (msg == '4') {
    banco.db[user].stage = 2
    return [sentences.respStrange]
  }

  return [sentences.misunderstood]
}

exports.execute = execute