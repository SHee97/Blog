import * as styles from './postHeader.module.scss';

const PostHeader = ({ title, date }) => {
  return (
    <div className={styles.postHeadWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.date}>{date}</span>
    </div>
  );
};

export default PostHeader;
