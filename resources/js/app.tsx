import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import Layout from './components/layouts/Layout';

createInertiaApp({
  resolve: async (name: string) => {
    const pages = import.meta.glob('./pages/**/*.tsx');
    const page = (await resolvePageComponent(
      `./pages/${name}.tsx`,
      pages
    )) as any;
    page.default.layout = (page: React.ReactNode) => <Layout childern={page} />;
    return page;
  },
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />);
  },
});
