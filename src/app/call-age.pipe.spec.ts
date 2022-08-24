import { CallAgePipe } from './call-age.pipe';

describe('CallAgePipe', () => {
  it('create an instance',
    () => {
      // @ts-ignore
      const pipe = new CallAgePipe();
      expect(pipe).toBeTruthy();
    });
});
