# LinkedIn Post Generator — AI-Powered Content Creation

A **React application** that generates professional LinkedIn posts using **Claude AI**. Provide a topic, customise the tone with advanced settings, and get an engaging, ready-to-post LinkedIn post in seconds.

🔗 **Live Demo**: [here](https://linkedin-posts-tawny-seven.vercel.app/)

---

## Features

- **AI Post Generation**: Generates professional, engaging LinkedIn posts powered by Claude (Anthropic)
- **Custom System Message**: Override the default AI behaviour with your own instructions
- **Output Examples**: Provide example posts to guide the style and format of the output
- **Image Support**: Attach an image file or URL for Claude to reference when generating the post
- **Live Preview**: Generated post renders instantly in the preview panel
- **Copy to Clipboard**: One-click copy of the finished post

---

## Tech Stack

**Frontend**
- React 18 + TypeScript
- Redux Toolkit
- SCSS
- Vite

**Backend (Serverless)**
- Vercel Serverless Functions (Node.js)
- Anthropic SDK (`claude-haiku-4-5`)

**Deployment**
- Vercel (frontend + serverless functions)

---

## Requirements

- Node.js 18+
- Anthropic API key

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/lxndrbukin/linkedin-post-generator.git
cd linkedin-post-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
CLAUDE_API_KEY=your_anthropic_api_key
```

---

## Usage

### Start the development server

```bash
vercel dev
```

> **Note**: `vercel dev` is required instead of `npm start` to run the serverless functions locally.

The app will be available at `http://localhost:3000`.

---

## Project Structure

```
linkedin-post-generator/
│
├── api/
│   └── post.js                      # Vercel serverless function → Claude API
│
├── src/
│   ├── components/
│   │   ├── App.tsx                  # Root layout
│   │   └── Generator/
│   │       ├── Generator.tsx        # Main generator panel + Generate button
│   │       ├── GeneratorForm.tsx    # Prompt input
│   │       ├── GeneratorSettings.tsx # Advanced settings panel
│   │       └── GeneratorOutput.tsx  # Post preview + copy button
│   │
│   ├── store/
│   │   ├── slices/
│   │   │   ├── generator.ts         # Redux slice + reducers
│   │   │   └── types.ts             # TypeScript types
│   │   └── thunks/
│   │       └── post.ts              # Async thunk for post generation
│   │
│   ├── styles/
│   │   └── styles.scss              # Global styles
│   │
│   └── index.tsx                    # App entry point
│
├── .env.local                       # API keys (never commit this)
├── .gitignore
└── README.md
```

---

## How It Works

1. User enters a topic or description in the prompt field
2. Optional advanced settings can be configured — custom system message, output examples, or an image
3. On clicking Generate, the request is sent to the Vercel serverless function at `/api/post`
4. The serverless function builds the prompt and calls Claude via the Anthropic SDK
5. The generated post is returned and rendered in the preview panel
6. User copies the post and pastes it directly into LinkedIn

The serverless function keeps the Anthropic API key secure — it never reaches the browser.

---

## Advanced Settings

| Setting | Description |
|---------|-------------|
| **System Message** | Override Claude's default behaviour with custom instructions |
| **Examples** | Provide example posts to guide the output style and tone |
| **Image** | Attach an image file or URL for Claude to reference |

---

## Deployment

The app is deployed on Vercel. To deploy your own instance:

```bash
vercel
```

Add your environment variable in the Vercel project dashboard under **Settings → Environment Variables**:

```
CLAUDE_API_KEY=your_anthropic_api_key
```

---

## Future Improvements

- [ ] Tone selector (professional, casual, storytelling, educational)
- [ ] Post length control (short, medium, long)
- [ ] Multiple post variations generated at once
- [ ] Post history saved to local storage
- [ ] Character count indicator
- [ ] Direct LinkedIn share integration

---

## License

This project is open source and available for personal and educational use.
