'use client';

import { startTransition } from "react";
import { useRouter } from "next/navigation";


type Error = {
    error: Error;
    reset: () => void;
}

export default function ErrorBoundary({error, reset} : Error) {
  const router = useRouter();
  const handleRetry = () => {
    startTransition(() => {
      router.refresh()
      reset();
    }) ; 
  }  
    return (
      <div>
        <h1> error occurred {error.message}</h1>
        <button onClick={handleRetry}>Try Again</button>
      </div>
    );
  }