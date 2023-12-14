import express, { type Request, type Response, type Application } from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'

import { analyzeImages } from './services/openai'

const app: Application = express()
const port = process.env.PORT ?? 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Server')
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.post('/api/analyze-images', async (req: Request, res: Response) => {
  const { response } = await analyzeImages({ prompt: req.body.prompt, imageUrls: req.body.imageUrls })
  res.json({ response })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
