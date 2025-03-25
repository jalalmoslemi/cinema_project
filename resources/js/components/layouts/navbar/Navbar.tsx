import { SharedData } from '@/types/inertia';
import { Link, usePage } from '@inertiajs/react';
import UserInfo from './UserInfo';

function Navbar() {
  const {
    props: { auth },
  } = usePage<SharedData>();

  return (
    <nav className="flex py-4 px-8 border-b border-b-zinc-200">
      <div>
        <Link href="/">خانه</Link>
      </div>

      <ul className="flex mr-4">
        <li>
          <Link href="/movies">فیلم ها</Link>
        </li>
      </ul>

      {auth && (
        <ul className="flex mr-auto gap-x-6">
          <li>
            <UserInfo />
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
