export const CommentPage = async () =>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <div>
            <h1>Comment page</h1>
            <p>This is the comment page</p>
        </div>
    );  
  }