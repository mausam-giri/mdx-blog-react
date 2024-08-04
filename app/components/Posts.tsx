import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <div className="min-h-screen">
        <p className="mt-10 text-center">Sorry, no posts available.</p>
      </div>
    );
  }
  return (
    <div>
      <ul className="list-none p-0">
        {posts.map((post, idx) => (
          <ListItem key={idx} post={post} />
        ))}
      </ul>
    </div>
  );
}
