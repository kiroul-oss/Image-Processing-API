import sharp from 'sharp';
import path from 'path';

// function to resize the image
export const trans = async (
  filename: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo> => {
  const result = await sharp(`${path.resolve('./')}/images/${filename}.jpg`)
    .resize({ width, height })
    .toFile(
      `${path.resolve('./')}/newImage/thumb/${filename}&${width}&${height}.jpg`
    );
  return result;
};
