// app/dashboard/page.tsx
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return <h1>🚀 Welcome to Dashboard, {session?.user?.name}!</h1>;
}