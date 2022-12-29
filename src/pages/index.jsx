import PageTemplate from '../templates/PageTemplate';

import { page } from './index.module.scss';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <main className={page}>
      <PageTemplate></PageTemplate>
    </main>
  );
};

export default IndexPage;
