
import { Suspense } from "react";
import { Blogpage } from "../../components/blogcomponent";
import { CommentPage } from "../../components/commentscomp";
export default function DashboardPage() {
  console.log("Dashboard client component");

  return (
    <div>
      <h1>Dashboard</h1>

      <Suspense fallback={<h1>Loading blog page...</h1>}>
        <Blogpage />
      </Suspense>
      <Suspense fallback={<h1>Loading comments...</h1>}>
        <CommentPage />
      </Suspense>

    </div>
  );
}
