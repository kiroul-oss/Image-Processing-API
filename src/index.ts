import express from 'express';
import routes from './routes/resize';
const port = 8000;
const route = express.Router();
const app = express();

route.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello in image processing Api app');
});
app.use('/api', routes);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

export default app;
