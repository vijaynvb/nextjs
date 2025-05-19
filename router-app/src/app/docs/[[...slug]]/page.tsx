type Params = {
    params: {
        slug?: string[];
    }
}
export default  function DocsDetailsPage(params : Params) {
    const  slug  =  params.params.slug ? params.params.slug : [];
    if(slug.length === 1) {
        return (
        <h1> Docs Details Page {slug[0]}  </h1>
        );
    }
    return (
        <h1> Docs Details Page </h1>
    );
}
