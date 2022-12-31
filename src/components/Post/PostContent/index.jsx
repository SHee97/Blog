const PostContent = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
