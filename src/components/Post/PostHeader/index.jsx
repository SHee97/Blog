const PostHeader = ({ title, date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <span>{date}</span>
    </div>
  );
};

export default PostHeader;
