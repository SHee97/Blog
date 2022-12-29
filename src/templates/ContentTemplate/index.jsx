import * as styles from './contentTemplate.module.scss';

const ContentTemplate = ({ children }) => {
  return <article className={styles.contentWrapper}>{children}</article>;
};

export default ContentTemplate;
