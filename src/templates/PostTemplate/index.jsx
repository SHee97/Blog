import PostHeader from 'components/Post/PostHeader';
import PostContent from 'components/Post/PostContent';

import * as styles from './postTemplate.module.scss';

const PostTemplate = ({
  post: {
    node: {
      html,
      frontmatter: { title, date },
    },
  },
}) => {
  return (
    <section className={styles.postTemplate}>
      <PostHeader title={title} date={date} />
      <PostContent html={html} />
    </section>
  );
};

export default PostTemplate;
