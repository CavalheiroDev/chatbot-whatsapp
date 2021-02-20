const sentences = require('../sentences/sentences')
const banco = require('../banco')

function execute(user, msg) {
  banco.db[user].stage = 4
  setTimeout(() => {
    banco.db[user].stage = 0
  }, 7200000)
  return [sentences.ended]
}
exports.execute = execute