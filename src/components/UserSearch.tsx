import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { RootState } from '../store';
import { setSearch } from './../features/search/searchSlice';

const UserSearch = () => {
    const search = useSelector((state : RootState) => state.search.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='d-flex justify-content-center position-fixed top-50 left-50 start-50 translate-middle'>
            <FormControl
                className='shadow-none d-inline w-auto float-start me-3'
                placeholder='Find a user...'
                value={search}
                onChange={evt => dispatch(setSearch(evt.target.value))}
            />

            <Button variant='success' onClick={() => navigate(search)}>
                <FontAwesomeIcon className='me-2' icon={faSearch} />
                Search
            </Button>
        </div>
    );
};

export default UserSearch;