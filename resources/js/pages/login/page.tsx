import Button from '@/components/ui/form/Button';
import Input from '@/components/ui/form/Input';
import { UserLogin } from '@/types/user';
import { useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';

function LoginPage() {
  const { errors, post, setData } = useForm<UserLogin>();

  const submit = (e: FormEvent) => {
    e.preventDefault();

    post('/login');
  };

  return (
    <div>
      <form onSubmit={submit}>
        <section className="mx-auto mt-8 border border-zinc-300 sm:w-6/12 lg:w-4/12 rounded shadow p-4">
          <h4>فرم ورود</h4>

          <div className="flex flex-col mt-8">
            <label htmlFor="">ایمیل</label>
            <Input onChange={e => setData('email', e.target.value)} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="">رمز</label>
            <Input onChange={e => setData('password', e.target.value)} />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="mt-6">
            <Button type="submit">ورود</Button>
          </div>
        </section>
      </form>
    </div>
  );
}
export default LoginPage;
