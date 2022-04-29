import faker from '@faker-js/faker';

export const getRepoData = () => ({
    name: faker.name.findName(),
    visibility: faker.random.word(),
    description: faker.lorem.paragraph(),
    language: faker.random.word(),
    updated_at: faker.date.soon().toString()
});

export const getReposData = ({length = 1} = {}) => {
    const repos = [];
    for (let index = 0; index < length; index++) {
        repos.push(getRepoData());
    }
    return repos;
};
