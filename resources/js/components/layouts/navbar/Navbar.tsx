import { Link } from '@inertiajs/react';

function Navbar() {
  return (
    <nav className="flex py-2 px-4 border-b border-b-zinc-200">
      <div>
        <Link href="/">خانه</Link>
      </div>

      <ul className="flex mr-4">
        <li>
          <Link href="/movies">فیلم ها</Link>
        </li>
      </ul>

      <ul className="flex mr-auto gap-x-4">
        <li>
          <Link href="/register">ثبت نام</Link>
        </li>
        <li>
          <Link href="/login">ورود</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
