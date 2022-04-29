import reducer, { setRepos } from '../../../features/repos/reposSlice';
import { getReposData } from "../../helpers/repoHelper";

describe('Repos Slice Tests', () => {
  test('should set repos', () => {
    const previousState = {repos: []};
    const repos = getReposData();
    expect(reducer(previousState, setRepos(repos))).toEqual({repos});
  });

  test('should set repos as empty array', () => {
    const previousState = {repos: getReposData()};
    expect(reducer(previousState, setRepos([]))).toEqual({repos: []});
  });
});
