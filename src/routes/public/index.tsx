import { lazyImport } from 'src/utils/lazyImport';

import './style.scss';

const { Page404 } = lazyImport(() => import('src/pages/Error/'), 'Page404');
export const publicRoutes = [
  {
    path: '/*',
    element: <Page404 />,
  },
];
