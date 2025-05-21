// app/posts-sequential/author.tsx
type AuthorProps = {
    userId: number;
  };
  
  type Author = {
    id: number;
    name: string;
  };
  
  export default async function Author({ userId }: AuthorProps) {

    await new Promise((resolve) => setTimeout(resolve, 4000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const author: Author = await response.json();
  
    return <span>{author.name}</span>;
  }