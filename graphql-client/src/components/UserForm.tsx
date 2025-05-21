'use client';

import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import client from '@/lib/apollo-client';
import { ADD_USER, UPDATE_USER, DELETE_USER } from '@/graphql/mutations';
import { gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export default function UserForm() {
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { data: userData, loading: loadingUsers, refetch } = useQuery(GET_USERS, { client });
  const [addUser] = useMutation(ADD_USER, { client });
  const [updateUser] = useMutation(UPDATE_USER, { client });
  const [deleteUser] = useMutation(DELETE_USER, { client });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateUser({ variables: { id, name, email } });
        alert('User updated successfully!');
      } else {
        await addUser({ variables: { name, email } });
        alert('User added successfully!');
      }
      setId(null);
      setName('');
      setEmail('');
      refetch();
    } catch (err) {
      console.error(err);
      alert('Error occurred');
    }
  };

  const handleEdit = (user: any) => {
    setId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = async (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      await deleteUser({ variables: { id: userId } });
      refetch();
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded mb-6">
        <h2 className="text-xl font-bold mb-2">{id ? 'Update User' : 'Add User'}</h2>
        <div>
          <label className="block mb-1 font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {id ? 'Update User' : 'Add User'}
          </button>
          {id && (
            <button
              type="button"
              onClick={() => {
                setId(null);
                setName('');
                setEmail('');
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-lg font-semibold mb-2">User List</h3>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : (
        <ul className="space-y-2">
          {userData?.users.map((user: any) => (
            <li key={user.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}