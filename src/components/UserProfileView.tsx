import { useDispatch, useSelector } from 'react-redux';
import ProfileInfo from './ProfileInfo';

import ProfileNav from './ProfileNav';
import RepositoryTab from './RepositoryTab';
import { RootState } from '../store';
import { useEffect } from 'react';
import { setUser } from '../features/user/userSlice';
import { useParams } from 'react-router-dom';
import { setLoading } from '../features/loading/loadingSlice';

const UserProfileView = () => {
    const { username } = useParams();

    const user = useSelector((state : RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(user => {
                dispatch(setUser(user));
                dispatch(setLoading(false));
            })
            .catch(error => {
                console.log(error);
                dispatch(setLoading(false));
            });
    }, []);

    return (
        <div className='container-fluid my-5'>
            <div className='row ps-5'>
                <ProfileNav repositoryCount={user.public_repos} starCount={user.public_gists} />
            </div>

            <div className='row d-flex justify-content-center'>
                <div className='col-md-3' style={{marginTop: '-30px'}}>
                    <ProfileInfo
                        photo={user.avatar_url}
                        fullname={user.name}
                        username={user.login}
                        bio={user.bio}
                        followers={user.followers}
                        following={user.following}
                        company={user.company}
                        location={user.location}
                        email={user.email}
                    />
                </div>

                <div className='col-md-8'>
                    <RepositoryTab />
                </div>
            </div>
        </div>
    )
};

export default UserProfileView;