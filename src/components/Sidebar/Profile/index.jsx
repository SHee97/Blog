import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './profile.module.scss';

const Profile = ({ profileImage }) => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profileImageWrapper}>
        <GatsbyImage classNames={styles.profileImage} image={profileImage} alt='Profile image' />
      </div>
      <Link to='/'>
        <h1 className={styles.title}>SHee97's Blog</h1>
      </Link>
    </div>
  );
};

export default Profile;
