# OpenAI Vision + NodeJS

## Setup
1. Create `.env` file as a duplicate of `.env.example` and configure `OPENAI_API_KEY`.
2. Run `npm install`.
3. Run `npm run dev` to start nodemon dev server.

## API

### Request

```http
POST /api/analyze-images
```

| Parameter | Type       | Description                   |
| :--- |:-----------|:------------------------------|
| `prompt` | `string`   | **Required**. GPT prompt |
| `imageUrls` | `string[]` | **Required**. Image URLs      |

### Response

```javascript
{
  "response": string
}
```