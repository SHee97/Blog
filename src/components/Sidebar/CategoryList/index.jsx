import * as styles from './categoryList.module.scss';

const CategoryList = ({ posts }) => {
  const categoryCount = posts.reduce(
    (
      countList,
      {
        node: {
          frontmatter: { categories },
        },
      }
    ) => {
      categories.forEach((category) => {
        if (countList[category] === undefined) countList[category] = 1;
        else countList[category]++;
      });

      return countList;
    },
    {}
  );
  return (
    <div className={styles.categoryListWrapper}>
      <span className={styles.title}>Category</span>
      <ul className={styles.categoryList}>
        {Object.entries(categoryCount).map(([key, value]) => (
          <li className={styles.categoryItem} key={key}>
            {key} ({value})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
