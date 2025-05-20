'use client';
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [input, setInput] = useState("");
    return (
      <>
      <Link href="/login">Login</Link><br />
      <Link href="/register">Register</Link><br/>
      <Link href="/forgotpassword">Forgot Password</Link>
        <h1> Profile Layout</h1>
        <input value={input } onChange={(e) => setInput(e.target.value)} />
          {children}
      </>
    );
  }
  