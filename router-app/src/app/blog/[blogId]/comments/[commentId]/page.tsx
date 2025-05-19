import { notFound } from "next/navigation";

type Params = {
    params: {
        blogId: string; 
        commentId: string;
    }
}
export default  function CommentsDetailsPage(params : Params) {
    const { blogId, commentId } =  params.params;
    if(Number(commentId) > 100){
         notFound();
    }
    return (
      <h1> Blog Details Page {blogId} - Comment ID: {commentId}  </h1>
    );
  }