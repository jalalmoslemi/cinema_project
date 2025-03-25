import { ReactNode } from 'react';
import Navbar from './navbar/Navbar';

interface Props {
  childern: ReactNode;
}

function Layout({ childern }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grow">{childern}</main>
      <footer className="py-2 px-4 border-t border-zinc-300">
        this is footer
      </footer>
    </div>
  );
}
export default Layout;
