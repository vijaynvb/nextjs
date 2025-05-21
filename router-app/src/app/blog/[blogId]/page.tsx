import { Metadata } from "next";

type Params = {
    params: {
        blogId: string; 
    }
}
type Props = {
  params: { blogId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogId } = await params;

  // Simulate fetching data
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Blog Post ${blogId}`), 100);
  });

  return {
    title: `Blog | ${title}`,
  };
}


// /blog/1 -> model binding -> blogId = 1
export default  async function BlogDetailsPage(params : Promise< Params>) {
    const { blogId } = (await params).params;
    return (
      <h1> Blog Details Page {blogId}  </h1>
    );
  }

  // load -> model binding 
  // BlogDetailsPage -> 1,2