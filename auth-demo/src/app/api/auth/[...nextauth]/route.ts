// app/api/auth/[...nextauth]/route.ts
// import  NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import type { AuthOptions } from 'next-auth';

// export const authOptions: AuthOptions = {
//   session: {
//    strategy: 'jwt',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: { label: 'Username', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (credentials?.username === 'admin' && credentials?.password === 'admin') {
//           return { id: '1', name: 'Admin User', email: 'admin@example.com' };
//         }
//         return null;
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET || 'supersecretkey',
//   pages: {
//     signIn: '/login',
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };















// Github Auth

import  NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from "next-auth/providers/github";
import type { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  session: {
   strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.username === 'admin' && credentials?.password === 'admin') {
          return { id: '1', name: 'Admin User', email: 'admin@example.com' };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || 'supersecretkey',
  pages: {
    signIn: '/login',
  },
};

export const authOptions1: AuthOptions = {
  providers: [
     GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID || "",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        authorization: {
            params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code",
            },
        },
    }),
  ],
};

const handler = NextAuth({...authOptions,...authOptions1});


export { handler as GET, handler as POST, handler as auth, handler as signIn, handler as signOut };