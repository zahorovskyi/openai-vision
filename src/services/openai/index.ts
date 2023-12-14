import OpenAI from 'openai'

const openai = new OpenAI()

interface AnalyzeImagesParams {
  prompt: string
  imageUrls: string[]
}

type AnalyzeImagesResult = Promise<{ response: string | null }>

export const analyzeImages = async ({ prompt, imageUrls }: AnalyzeImagesParams): AnalyzeImagesResult => {
  const promptImages = imageUrls.map((imageUrl) => ({
    type: 'image_url' as const,
    image_url: {
      url: imageUrl,
      detail: 'auto' as const
    }
  }))

  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    max_tokens: 500,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text' as const, text: prompt },
          ...promptImages
        ]
      }
    ]
  })

  return {
    response: response.choices[0].message.content
  }
}
