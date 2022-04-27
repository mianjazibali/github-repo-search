import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IProfileInfo {
    photo: string,
    fullname: string,
    username: string,
    bio: string,
    followers: number,
    following: number,
    company: string,
    location: string,
    email: string
};

export interface INavLink {
    icon: IconDefinition,
    title: string,
    count?: number,
    active?: boolean
}

export interface IProfileNav {
    repositoryCount: number,
    starCount: number
}

export interface IRepositoryItem {
    name: string,
    visibility: string,
    description: string,
    language: string,
    updatedAt: string
}

export interface IDropdownItem {
    text: string,
    value: string | number
}

export interface IDropdown {
    title : string,
    links : IDropdownItem[],
    parentClassName: string
};

// State Interfaces
export interface ISearchState {
    value: string
};

export interface IUserState {
    public_repos: number,
    public_gists: number,
    avatar_url: string,
    name: string,
    login: string,
    bio: string,
    followers: number,
    following: number,
    company: string,
    location: string,
    email: string
};

export interface IRepoState {
    name: string,
    visibility: string,
    description: string,
    language: string,
    updated_at: string
};

export interface IReposState {
    repos: IRepoState[]
};
