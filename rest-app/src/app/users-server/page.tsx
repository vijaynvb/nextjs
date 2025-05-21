// app/users-server/page.tsx
import React from 'react';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // http response -> status code body version headers
  console.log('Server-side rendering');
  const users: User[] = await response.json();

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">Server-side Users</h1>
      {users.map((user) => (
        <div key={user.id} className="border p-3 rounded shadow-sm">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ))}
    </div>
  );
}