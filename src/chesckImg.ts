import express from 'express';
import { promises as fsPromises } from 'fs';
import path from 'path';

// function to check if the image is already exist
export const check = async (
  filename: string,
  width: number,
  height: number
): Promise<boolean> => {
  const myFiles = await fsPromises.readdir(
    `${path.resolve('./')}/newImage/thumb`
  );
  myFiles.forEach((f) => {
    if (f === `${filename}&${width}&${height}.jpg`) {
      return true;
    }
  });
  return false;
};

// middleware to check if the image already exists
export const middleware = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const pass = await check(
    req.query.filename as string,
    req.query.width as unknown as number,
    req.query.height as unknown as number
  );
  if (pass === true) {
    res.sendFile(
      `${path.resolve('./')}/newImage/thumb/${req.query.filename as string}&${
        req.query.width as unknown as number
      }&${req.query.height as unknown as number}.jpg`
    );
  } else {
    next();
  }
};
