import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => console.log('Hello World'));

export { app };
