import RepositoryList from './RepositoryList';
import RepositorySearch from './RepositorySearch';

const repositories = [
    {
        name: 'github-repo-search',
        type: 'Public',
        description: 'An app built to have better understanding of React framework. Live here at https://mianjazibali.github.io/react-weather-app/',
        language: 'TypeScript',
        updatedAt: 'Updated Yesterday'
    },
    {
        name: 'react-weather-app',
        type: 'Public',
        description: 'An app built to have better understanding of React framework. Live here at https://mianjazibali.github.io/react-weather-app/',
        language: 'JavaScript',
        updatedAt: 'Updated on Feb 23'
    }
];

const RepositoryTab = () => {
    return (
        <>
            <RepositorySearch />
            <RepositoryList repositories={repositories} />
        </>
    );
};

export default RepositoryTab;