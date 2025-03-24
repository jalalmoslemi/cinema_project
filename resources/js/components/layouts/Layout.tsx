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
      <footer>this is footer</footer>
    </div>
  );
}
export default Layout;
