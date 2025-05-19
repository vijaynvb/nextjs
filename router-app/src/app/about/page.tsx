
import { redirect } from "next/navigation";

export default async function About(searchParams: { searchParams: {name?: string}}) {
  const name = searchParams.searchParams.name;
    if(name === "redirect") {
        redirect("/blog");
    }
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (
      <>
        <h1> About Page</h1>

      </>
    );
  }

// 'use client'

// import { useRouter } from "next/navigation";

// export default function About() {
//     const router = useRouter();
//     const handleClick = () => {
//       console.log("Button clicked");
//       router.push("/blog");
//     };
//     return (
//       <>
//         <h1> About Page</h1>
//         <button onClick={handleClick}>Click Me</button>
//       </>
//     );
//   }
  