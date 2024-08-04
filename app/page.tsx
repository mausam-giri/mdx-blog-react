import Image from "next/image";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <section className="min-h-screen">
      {/* @ts-expect-error Server Component */}
      <Posts />
    </section>
  );
}
