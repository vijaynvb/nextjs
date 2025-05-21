'use client';

export default  function error(error: Error) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold text-red-500">Error</h1>
      <p className="mt-2 text-lg">{error.message}</p>
    </div>
  );    
}
