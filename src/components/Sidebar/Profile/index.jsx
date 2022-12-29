import ProfileImage from './ProfileImage/index';

import * as styles from './profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profileWrapper}>
      <ProfileImage />
      <h1 className={styles.title}>SHee97's Blog</h1>
    </div>
  );
};

export default Profile;
