
export const dynamicParams = false;

export async function generateStaticParams() {
    // static file for some blogs, db get blog name and create when building
  return [{blogId: '1'}, {blogId: '2'}, {blogId: '3'}];
}

interface BlogPostPageParams {
  blogId: string;
}

export default async function BlogPostPage({ params }: { params: Promise<BlogPostPageParams> }) {
    const { blogId } = await params;
    return <h1>Blog Post {blogId} Details</h1>;
  }
  