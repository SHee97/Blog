const CategoryPage = ({ pageContext: { category } }) => {
  console.log(category);
  return <div>{category}</div>;
};

export default CategoryPage;
