import { trans } from '../resizeImg';

// testing of resizing function
describe('test for resizing function', () => {
  it('should be resolved  make trans function', async () => {
    await expectAsync(trans('fjord', 200, 250)).toBeResolved();
  });

  it('should be rejected  if i am put wrong name', async () => {
    await expectAsync(trans('pjord', 200, 250)).toBeRejected();
  });
});
