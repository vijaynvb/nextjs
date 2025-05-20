
export default async function DemoParams({params, searchParams}: 
    {
        params: Promise<{pathparamsid: string}>, 
        searchParams: Promise<{name?: string}>
    }) {
        const { pathparamsid } = await params;
        const name = (await searchParams).name;
    return (
      <>
        <h1> Demo Params Page</h1>
        <p> Path Params ID: {pathparamsid}</p>
        <p> Search Params Name: {name}</p>

      </>
    );
  }