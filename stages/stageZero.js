const sentences = require('../sentences/sentences')
const banco = require('../banco')

function execute(user, msg) {
  banco.db[user].stage = 1
  return [sentences.wellcome, sentences.menu]
}

exports.execute = execute