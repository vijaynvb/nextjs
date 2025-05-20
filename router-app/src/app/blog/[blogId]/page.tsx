type Params = {
    params: Promise<{
        blogId: string; 
    }>
}
// /blog/1 -> model binding -> blogId = 1
export default  async function BlogDetailsPage(params : Params) {
    const { blogId } = await params.params;
    return (
      <h1> Blog Details Page {blogId}  </h1>
    );
  }

  // load -> model binding 
  // BlogDetailsPage -> 1,2