let stages = {
  0: {
    description: 'wellcome and send menu',
    obj: require('./stages/stageZero')
  },
  1: {
    description: 'Menu options',
    obj: require('./stages/stageOne')
  },
  2: {
    description: 'responds the user',
    obj: require('./stages/stageTwo')
  },
  3: {
    description: 'ends the conversation',
    obj: require('./stages/stageThree')
  }
}

exports.step = stages