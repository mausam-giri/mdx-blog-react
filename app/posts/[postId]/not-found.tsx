import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <div className="text-center">
        <p className="mt-10">Sorry, the requested post does not exit.</p>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
