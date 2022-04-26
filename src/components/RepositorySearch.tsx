import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, Button } from 'react-bootstrap';

import Dropdown from './Dropdown';

const RepositorySearch = () => {
    return (
        <div className='repository-search border-bottom border-light py-3'>
            <FormControl
                className='shadow-none w-50 float-start me-3'
                placeholder='Find a repository...'
            />

            <Dropdown
                title='Type'
                links={[{ text: 'Action', value: 'action' }]}
                parentClassName='me-3'
            />

            <Dropdown
                title='Language'
                links={[{ text: 'Action', value: 'action' }]}
                parentClassName='me-3'
            />

            <Dropdown
                title='Sort'
                links={[{ text: 'Action', value: 'action' }]}
                parentClassName='me-3'
            />

            <Button variant='success'>
                <FontAwesomeIcon icon={faBookBookmark} />
                New
            </Button>
        </div>
    )
};

export default RepositorySearch;