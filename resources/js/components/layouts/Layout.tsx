import { ReactNode } from 'react';

interface Props {
  childern: ReactNode;
}

function Layout({ childern }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>this is header</header>
      <main className="grow">{childern}</main>
      <footer>this is footer</footer>
    </div>
  );
}
export default Layout;
