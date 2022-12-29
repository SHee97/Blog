import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './profile.module.scss';

const Profile = ({ profileImage }) => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profileImageWrapper}>
        <GatsbyImage classNames={styles.profileImage} image={profileImage} alt='Profile image' />
      </div>
      <h1 className={styles.title}>SHee97's Blog</h1>
    </div>
  );
};

export default Profile;
