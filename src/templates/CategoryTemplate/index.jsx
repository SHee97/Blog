import PageTemplate from '../PageTemplate';

const CategoryTemplate = ({ pageContext: { category } }) => {
  return <PageTemplate>{category}</PageTemplate>;
};

export default CategoryTemplate;
