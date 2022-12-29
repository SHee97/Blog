import Profile from './Profile/index';

import * as styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Profile />
    </aside>
  );
};

export default Sidebar;
