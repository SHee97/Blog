import PostHeader from 'components/Post/PostHeader';
import PostContent from 'components/Post/PostContent';

const PostTemplate = ({
  post: {
    node: {
      html,
      frontmatter: { title, date },
    },
  },
}) => {
  return (
    <section>
      <PostHeader title={title} date={date} />
      <PostContent html={html} />
    </section>
  );
};

export default PostTemplate;
