import { useUser } from '@auth0/nextjs-auth0';
import { BaseLayout } from '@components/ui/layout';

export default function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className='bg-gray-900 flex justify-between py-2 px-4 items-center text-white'>
        Welcome {user.name}! <a className='text-orange-400' href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}

Dashboard.Layout = BaseLayout;