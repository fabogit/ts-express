# ts-express
Typescript express basic setup

# Setup

- Create `tsconfig.json` file

```
npx tsc --init
```
- Initialize nodejs application and fill needed fields

```
npm init
```
- Create source code folder and server entrypoint @`/src/app.ts`

```
mkdir ./src/ && touch ./src/app.ts
```

- Install Dependencies

```
npm i express
```

- Install ts devDependencies (`ts-node-dev` to run server like `nodemon`)

```
npm i -D typescript @types/node @types/express ts-node-dev
```

- Add script to package.json (watch mode and restart on save)

```
  "scripts": {
	"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
  },
```

- Start server

```
npm run dev
```