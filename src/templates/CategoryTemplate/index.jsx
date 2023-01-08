import PageTemplate from '../PageTemplate';
import ContentTemplate from '../ContentTemplate';
import PostList from 'components/Post/PostList';

const CategoryTemplate = ({ pageContext: { category } }) => {
  console.log(category);
  const filterPostListByCategory = (post) => {
    const {
      node: {
        frontmatter: { categories },
      },
    } = post;

    return categories.includes(category);
  };

  return (
    <main>
      <PageTemplate>
        <ContentTemplate>
          <PostList filter={filterPostListByCategory} />
        </ContentTemplate>
      </PageTemplate>
    </main>
  );
};

export default CategoryTemplate;
