import './patcher'

import OpenAI from 'openai'

async function main() {
  const openai = new OpenAI({
    apiKey: 'fake key',
  })

  await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Hi',
  })
}

main()
