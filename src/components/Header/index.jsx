import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import * as styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>SHee97's Blog</h1>
      <Link className={styles.iconWrapper} to='/'>
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
