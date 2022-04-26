import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, FormControl } from 'react-bootstrap';

const UserSearch = () => {
    return (
        <div className='d-flex justify-content-center position-fixed top-50 left-50 start-50 translate-middle'>
            <FormControl
                className='shadow-none d-inline w-auto float-start me-3'
                placeholder='Find a user...'
            />

            <Button variant='success'>
                <FontAwesomeIcon className='me-2' icon={faSearch} />
                Search
            </Button>
        </div>
    );
};

export default UserSearch;