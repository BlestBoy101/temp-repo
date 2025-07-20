//const names = require('./names')
//const data = require('./alternativenames')
//console.log(names)
//console.log(data)
//require('./mind-grenade')

// Manual approach(create package.jason in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);

