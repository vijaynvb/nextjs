// components/Navbar.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavbarSession from './NavbarSession';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? 'underline font-semibold' : '';

  return (
    <nav className="flex gap-4 mb-6 border-b pb-4 items-center">
      <h1 className="font-bold">My App</h1>
      
      <Link className={linkClass('/')} href="/">Home</Link>
      <Link className={linkClass('/dashboard')} href="/dashboard">Dashboard</Link>
      <Link className={linkClass('/blog')} href="/blog">Blog</Link>

      <div className="ml-auto">
        <NavbarSession />
      </div>
    </nav>
  );
}