'use client';

import { useQuery } from '@apollo/client';
import client from '@/lib/apollo-client';
import { FETCH_USER_DATA } from '@/graphql/queries';

export default function DataDisplay() {
  const { loading, error, data } = useQuery(FETCH_USER_DATA, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-8 p-6">
      {/* Users */}
      <section>
        <h2 className="text-xl font-bold mb-2">Users</h2>
        <ul className="space-y-2">
          {data.users.map((user: any) => (
            <li key={user.id} className="p-2 border rounded">
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </section>
      </div>

  );
}