import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import Layout from './components/layouts/Layout';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';

createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: async (name: string) => {
      const pages = import.meta.glob('./pages/**/*.tsx');
      const page = (await resolvePageComponent(
        `./pages/${name}.tsx`,
        pages
      )) as any;
      page.default.layout = (page: React.ReactNode) => (
        <Layout childern={page} />
      );
      return page;
    },
    setup: ({ App, props }) => <App {...props} />,
  })
);
