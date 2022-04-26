import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGroup, faBuilding, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';

import './ProfileInfo.scss';

interface ProfileInfoInterface {
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

const ProfileInfo = (props : ProfileInfoInterface) => {
    const {photo, fullname, username, bio, followers, following, company, location, email} = props;

    return (
        <div className='profile-info'>
            <img
                className='photo border'
                src={photo}
                alt='profile-picture'
            />

            <div className='px-2'>
                <p className='h3 mt-3 mb-0'>{fullname}</p>
                <p className='lead mt-0'>{username}</p>

                <p className='h6 mb-4'>{bio}</p>

                <a className='btn btn-outline-secondary d-block'>Edit Profile</a>

                <p className='mt-3'>
                    <small>
                        <FontAwesomeIcon className='icon me-2' icon={faUserGroup} />
                        {followers} follower • {following} following
                    </small>
                </p>

                <p className='mb-0'>
                    <small>
                        <FontAwesomeIcon className='icon me-2' icon={faBuilding} />
                        <strong>{company}</strong>
                    </small>
                </p>

                <p className='mb-0'>
                    <small>
                        <FontAwesomeIcon className='icon me-2' icon={faLocationDot} />{location}
                    </small>
                </p>

                <p className='mb-0'>
                    <small>
                        <FontAwesomeIcon className='icon me-2' icon={faEnvelope} />{email}
                    </small>
                </p>
            </div>
        </div>
    )
};

export default ProfileInfo;