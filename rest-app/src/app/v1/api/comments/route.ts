import { comments } from "@/data/fakedata";

export function GET() {
    return Response.json(comments);
} 

export async function POST(request: Request) {
    const  text = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: text.text
    };
    comments.push(newComment);
    return Response.json(newComment, { status: 201 });
}