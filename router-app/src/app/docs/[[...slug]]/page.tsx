type Params = {
    params: Promise<{
        slug?: string[];
    }>;
}
export default async  function DocsDetailsPage(params : Params) {
    const  slug  = (await params.params).slug || [];
    if(slug.length === 1) {
        return (
        <h1> Docs Details Page {slug[0]}  </h1>
        );
    }
    return (
        <h1> Docs Details Page </h1>
    );
}
