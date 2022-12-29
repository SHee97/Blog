import Profile from './Profile/index';

import * as styles from './sidebar.module.scss';
import CategoryList from './CategoryList/index';

const Sidebar = ({ posts }) => {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <CategoryList posts={posts} />
    </aside>
  );
};

export default Sidebar;
