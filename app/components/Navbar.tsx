import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="md:px-6 prose prose-xl mx-auto">
      <div className="flex justify-between flex-col sm:flex-row py-6 border-b">
        <h1 className="text-3xl font-bold grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="no-underline">
            Blogshub
          </Link>
        </h1>
        <div className="flex">
          <Link href={"/"}>Home</Link>
        </div>
      </div>
    </nav>
  );
}
