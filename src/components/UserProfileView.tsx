import ProfileInfo from './ProfileInfo';

import ProfileNav from './ProfileNav';
import RepositoryTab from './RepositoryTab';

const UserProfile = () => {
    return (
        <div className='container-fluid my-5'>
            <div className='row ps-5'>
                <ProfileNav repositoryCount={999} starCount={999} />
            </div>

            <div className='row d-flex justify-content-center'>
                <div className='col-md-3' style={{marginTop: '-30px'}}>
                    <ProfileInfo
                        photo='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                        fullname='Mian Jazib Ali'
                        username='mianjazibali'
                        bio='Software Engineer'
                        followers={1}
                        following={2}
                        company='@caremerge'
                        location='Lahore'
                        email='m.mianjazibali@gmail.com'
                    />
                </div>

                <div className='col-md-8'>
                    <RepositoryTab />
                </div>
            </div>
        </div>
    )
};

export default UserProfile;