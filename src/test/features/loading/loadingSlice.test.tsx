import reducer, { setLoading } from '../../../features/loading/loadingSlice';

describe('Loading Slice Tests', () => {
  test('should set loading state as true', () => {
    const previousState = {value: false};
    expect(reducer(previousState, setLoading(true))).toEqual({value: true});
  });

  test('should set loading state as false', () => {
    const previousState = {value: true};
    expect(reducer(previousState, setLoading(false))).toEqual({value: false});
  });
});
