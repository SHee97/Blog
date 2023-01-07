import PageTemplate from '../templates/PageTemplate';
import ContentTemplate from '../templates/ContentTemplate';
import PostList from 'components/Post/PostList';

import { page } from './index.module.scss';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <main className={page}>
      <PageTemplate>
        <ContentTemplate>
          <PostList count={9} />
        </ContentTemplate>
      </PageTemplate>
    </main>
  );
};

export default IndexPage;
