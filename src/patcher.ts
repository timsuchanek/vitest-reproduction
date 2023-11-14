const OpenAI = require('openai')

const oldCreate = OpenAI.Completions.prototype.create

const openai = new OpenAI({
  apiKey: 'fake key',
})

OpenAI.Completions.prototype.create = async function (...args) {
  console.log('\n\npatched\n\n')
  return oldCreate.call(this, ...args)
}
