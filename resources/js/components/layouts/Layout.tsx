import { ReactNode } from 'react';
import Navbar from './navbar/Navbar';
import { usePage } from '@inertiajs/react';
import AdminNavbar from './navbar/AdminNavbar';

interface Props {
  childern: ReactNode;
}

function Layout({ childern }: Props) {
  const { url } = usePage();
  const isAdminPage = url.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      <header>{isAdminPage ? <AdminNavbar /> : <Navbar />}</header>

      <main className="grow">{childern}</main>

      <footer className="py-2 px-4 border-t border-zinc-300">
        this is footer
      </footer>
    </div>
  );
}
export default Layout;
