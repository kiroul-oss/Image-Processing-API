import express from 'express';
import { trans } from '../resizeImg';
import { middleware } from '../chesckImg';
import path from 'path';
const routes = express.Router();

routes.get(
  '/images',
  middleware,
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const filename: unknown = req.query.filename;
      const width: unknown = req.query.width;
      const height: unknown = req.query.height;
      if (isNaN(width as number) || isNaN(height as number)) {
        res.status(404).send('you are entered invalid width or heigh value');
      } else {
        if (Number(width as string) > 0 && Number(height as string) > 0) {
          await trans(
            filename as string,
            Number(width as string),
            Number(height as string)
          );
          res.sendFile(
            `${path.resolve(
              './'
            )}/newImage/thumb/${filename}&${width}&${height}.jpg`
          );
        } else {
          res.send('invalid width or height');
        }
      }
    } catch (err) {
      res.send('this file is wrong');
    }
  }
);

export default routes;
