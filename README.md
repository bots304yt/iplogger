## Getting Started

First, setup the .env file

```bash
MONGODB_URI = 'mongouri'
MONGO_DB = 'iplogger'
MONGO_COLLECTION = 'logs'
REDIRECT_URL = 'https://example.com'
IPINFO_TOKEN = 'exampletoken'
TITLE = 'Example | Example page'
```

Then, run the server:

```bash
npm i

npm run build

npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
