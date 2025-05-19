
export default function DemoParams({params, searchParams}: 
    {
        params: {pathparamsid: string}, 
        searchParams: {name?: string}
    }) {
        const { pathparamsid } = params;
        const name = searchParams.name;
    return (
      <>
        <h1> Demo Params Page</h1>
        <p> Path Params ID: {pathparamsid}</p>
        <p> Search Params Name: {name}</p>

      </>
    );
  }