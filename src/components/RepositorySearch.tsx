import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, Button } from 'react-bootstrap';

import Dropdown from './Dropdown';

interface RepositorySearch {
    search: string,
    onChange: Function
};

const RepositorySearch = (props : RepositorySearch) => {
    const {search, onChange} = props;

    return (
        <div className='repository-search border-bottom border-light py-3'>
            <FormControl
                className='shadow-none w-50 float-start me-3'
                placeholder='Find a repository...'
                value={search}
                onChange={(evt) => onChange(evt.target.value)}
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
                <FontAwesomeIcon className="me-2" icon={faBookBookmark} />
                New
            </Button>
        </div>
    )
};

export default RepositorySearch;