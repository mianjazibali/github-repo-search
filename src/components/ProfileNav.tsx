import { Nav } from 'react-bootstrap';
import {faBookOpen, faBookBookmark, faTable, faCube, faStar} from '@fortawesome/free-solid-svg-icons';

import { IProfileNav } from './../types';
import ProfileNavLink from './ProfileNavLink';

const ProfileNav = (props : IProfileNav) => {
    const {repositoryCount, starCount} = props;

    return (
        <Nav className='profile-nav text-decoration-none border-bottom border-light d-flex justify-content-center mb-0' style={{minHeight: 60}}>
            <ProfileNavLink icon={faBookOpen} title='Overview' />
            <ProfileNavLink icon={faBookBookmark} title='Repositories' count={repositoryCount} active />
            <ProfileNavLink icon={faTable} title='Projects' />
            <ProfileNavLink icon={faCube} title='Packages' />
            <ProfileNavLink icon={faStar} title='Stars' count={starCount} />
        </Nav>
    )
};

export default ProfileNav;
