import PostItem from './PostItem';

import * as styles from './postList.module.scss';

const PostList = ({ posts, count }) => {
  return (
    <section className={styles.postListWrapper}>
      <div className={styles.header}>
        <h2>최근 포스팅</h2>
        <div className={styles.dropdown}>최신순</div>
      </div>
      <div className={styles.postList}>
        {posts.slice(0, count).map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
