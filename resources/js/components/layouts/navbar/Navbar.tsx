import { SharedData } from '@/types/inertia';
import { Link, usePage } from '@inertiajs/react';

function Navbar() {
  const {
    props: { auth },
  } = usePage<SharedData>();

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

      {auth && (
        <ul className="flex mr-auto gap-x-4">
          <li>
            <span className="text-blue-700">{auth.name}</span>
          </li>
          <li>
            <Link href="/logout">خروج</Link>
          </li>
        </ul>
      )}

      {!auth && (
        <ul className="flex mr-auto gap-x-4">
          <li>
            <Link href="/register">ثبت نام</Link>
          </li>
          <li>
            <Link href="/login">ورود</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default Navbar;
