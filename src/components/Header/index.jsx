import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import * as styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
