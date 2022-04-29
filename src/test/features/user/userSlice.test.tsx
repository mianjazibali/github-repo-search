import reducer, { initialState, setUser } from '../../../features/user/userSlice';
import { getUserData } from '../../helpers/userHelper';

describe('User Slice Tests', () => {
  test('should set user', () => {
    const previousState = initialState;
    const user = getUserData();
    expect(reducer(previousState, setUser(user))).toEqual(user);
  });

  test('should set repos as empty array', () => {
    const previousState = getUserData();
    expect(reducer(previousState, setUser(initialState))).toEqual(initialState);
  });
});
