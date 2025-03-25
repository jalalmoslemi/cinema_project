import { SharedData } from '@/types/inertia';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';

function UserInfo() {
  const {
    props: { auth },
  } = usePage<SharedData>();
  const [showInfoBox, setShowInfoBox] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowInfoBox(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="flex h-full items-center relative" ref={ref}>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setShowInfoBox(cur => !cur)}
      >
        <FaUser className="text-zinc-600 text-xl" />
      </button>

      {showInfoBox && (
        <div className="absolute top-8 left-0 z-10 bg-white shadow py-2 px-4 rounded min-w-[150px]">
          <p>{auth.name}</p>

          {auth.id === 1 && (
            <div className="mt-4">
              <Link href="/admin">داشتبورد</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default UserInfo;
