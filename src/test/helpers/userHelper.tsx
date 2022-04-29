import faker from "@faker-js/faker";

export const getUserData = () => ({
    public_repos: 0,
    public_gists: 0,
    avatar_url: faker.image.abstract(256, 256),
    name: faker.name.findName(),
    login: faker.internet.userName(),
    bio: faker.random.words(),
    followers: faker.datatype.number(),
    following: faker.datatype.number(),
    company: faker.company.companyName(),
    location: faker.address.cityName(),
    email: faker.internet.email()
});
