import * as styles from './postContent.module.scss';

const PostContent = ({ html }) => {
  return <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
