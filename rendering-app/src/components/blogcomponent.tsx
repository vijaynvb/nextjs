export const Blogpage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (
        <div>
            <h1>blog page</h1>
            <p>This is the blog page</p>
        </div>
    );  
  }