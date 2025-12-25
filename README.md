# Google Forms Creator

A ChatGPT app that enables programmatic creation of Google Forms through natural language instructions. This tool operates within the ChatGPT apps ecosystem, allowing ChatGPT to create Google Forms on behalf of users without direct access to the Google Forms API.

## Features

- Create Google Forms programmatically through ChatGPT conversations
- Support for multiple question types (short answer, paragraph, multiple choice, checkbox, dropdown, linear scale)
- Quiz mode support with correct answers
- Section headers and descriptions
- Form settings (email collection, confirmation messages)
- Idempotent and retry-safe operations

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [Material-UI](https://mui.com/) - UI component library
- Google Forms API - Backend integration

## Learn More

- [ChatGPT Apps SDK Documentation](https://openai.com/index/introducing-apps-in-chatgpt/)
- [Google Forms API Documentation](https://developers.google.com/forms/api)
