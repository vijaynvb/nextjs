import { comments } from "@/data/fakedata";

export function GET(request: Request, context: { params: { id: string } }) {
    const { id } = context.params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if (!comment) {
        return Response.json({ message: `Comment with ID: ${id} not found` }, { status: 404 });
    }
    return Response.json(comment);
}

export async function  PUT(request: Request, context: { params: { id: string } }) {
    const { id } = await context.params;
    const text = await request.json();
    const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id));
    if (commentIndex === -1) {
        return Response.json({ message: `Comment with ID: ${id} not found` }, { status: 404 });
    }
    comments[commentIndex].text = text.text;
    return Response.json(comments[commentIndex]);
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
    const { id } = context.params;
    const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id));
    if (commentIndex === -1) {
        return Response.json({ message: `Comment with ID: ${id} not found` }, { status: 404 });
    }
    comments.splice(commentIndex, 1);
    return Response.json({ message: `Comment with ID: ${id} deleted` });
}