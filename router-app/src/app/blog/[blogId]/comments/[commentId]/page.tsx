type Params = {
    params: {
        blogId: string; 
        commentId: string;
    }
}
export default  function CommentsDetailsPage(params : Params) {
    const { blogId, commentId } =  params.params;
    return (
      <h1> Blog Details Page {blogId} - Comment ID: {commentId}  </h1>
    );
  }