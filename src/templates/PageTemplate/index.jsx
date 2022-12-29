import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';

import * as styles from './pageTemplate.module.scss';

const PageTemplate = ({ children, posts }) => {
  return (
    <setion className={styles.template}>
      <Sidebar posts={posts} />
      <div className={styles.content}>
        <Header />
        {children}
        <Footer />
      </div>
    </setion>
  );
};

export default PageTemplate;
