// // app/login/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      callbackUrl,
    });
  };

  const doSocialLogin = async () => {
    await signIn('github', { callbackUrl });
  };

  return (
    <>
        <form onSubmit={handleLogin}>
          <input name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <form action={doSocialLogin}>
        <button className="bg-black text-white p-1 rounded-md m-1 text-lg" type="submit" name="action" value="github">
          Sign In With GitHub
        </button>
      </form>
      </>
  );
}


















// Github Auth

// 'use client';

// import { signIn } from 'next-auth/react';
// import { useSearchParams } from 'next/navigation';

// export default function LoginPage() {
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get('callbackUrl') || '/';

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     await signIn('credentials', {
//       username: formData.get('username'),
//       password: formData.get('password'),
//       callbackUrl,
//     });
//   };

//   const doSocialLogin = async () => {
//     await signIn('github', { callbackUrl });
//   };

//   return (
//     <><form onSubmit={handleLogin}>
//       <input name="username" placeholder="Username" required />
//       <input type="password" name="password" placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//     <form action={doSocialLogin}>
//         <button className="bg-black text-white p-1 rounded-md m-1 text-lg" type="submit" name="action" value="github">
//           Sign In With GitHub
//         </button>
//       </form>
//       </>
//   );
// }