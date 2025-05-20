import { notFound } from "next/navigation";

function getRandamInt(max: Number) {
    return Math.floor(Math.random() * max);
}   

type Params = {
    params: Promise<{
        blogId: string; 
        commentId: string;
    }>
}
export default async function CommentsDetailsPage({ params }: Params) {
    const { blogId, commentId } = await params;
    if (Number(commentId) > 100) {
        notFound();
    }
    const randomInt = getRandamInt(2);
    if(randomInt === 1) {
        throw new Error("Error in CommentsDetailsPage");
    }
    return (
      <h1> Blog Details Page {blogId} - Comment ID: {commentId} </h1>
    );
}