const sentences = require('../sentences/sentences')
const banco = require('../banco')

function execute(user, msg) {
  banco.db[user].stage = 3
  return [sentences.farewell]
}

exports.execute = execute