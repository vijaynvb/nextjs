type Params = {
    params: {
        blogId: string; 
    }
}
// /blog/1 -> model binding -> blogId = 1
export default  function BlogDetailsPage(params : Params) {
    const { blogId } =  params.params;
    return (
      <h1> Blog Details Page {blogId}  </h1>
    );
  }

  // load -> model binding 
  // BlogDetailsPage -> 1,2