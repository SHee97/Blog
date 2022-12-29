import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import * as styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <p className={styles.phrase}>Have A Good Day!</p>
      <p className={styles.copyright}>Copyright 2022, SHee97, All right reserved</p>
    </footer>
  );
};

export default Footer;
