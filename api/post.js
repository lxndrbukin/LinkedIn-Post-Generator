import Anthropic from '@anthropic-ai/sdk';

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

const SYSTEM_MESSAGE = `You are an expert LinkedIn content creator. 
Generate engaging, professional LinkedIn posts using plain text only.
Do NOT use markdown formatting like **bold** or _italic_.
Use line breaks, emojis, and #hashtags naturally as they appear on LinkedIn.
Keep the tone professional but conversational.`;

export default async function post(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    if (!CLAUDE_API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }
    const { systemMessage, prompt } = req.body;
    const userMessage = prompt.examples
      ? `${prompt.message}\n\nHere are some examples of the style and format I want:\n${prompt.examples}`
      : prompt.message;
    let imageSource = {};
    if (prompt.image) {
      if (prompt.image.type === 'file') {
        imageSource = {
          type: 'base64',
          media_type: prompt.image.mediaType,
          data: prompt.image.data,
        };
      } else if (prompt.image.type === 'url') {
        imageSource = {
          type: 'url',
          url: prompt.image.data,
        };
      }
    }
    const content = prompt.image
      ? [
          { type: 'text', text: userMessage },
          { type: 'image', source: imageSource },
        ]
      : userMessage;
    const client = new Anthropic({ apiKey: CLAUDE_API_KEY });
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      system: systemMessage || SYSTEM_MESSAGE,
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content,
        },
      ],
    });
    const text = response.content[0].text;
    res.status(200).json({ output: text });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
