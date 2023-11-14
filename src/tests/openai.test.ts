import '../patcher'

import { test } from 'vitest'
import OpenAI from 'openai'

test('test', async () => {
  const openai = new OpenAI({
    apiKey: 'fake key',
  })

  await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Hi',
  })
})
