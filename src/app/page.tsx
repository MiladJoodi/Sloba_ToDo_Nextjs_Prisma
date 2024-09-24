import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Course</h1>
      <Link href="/" className="btn btn-accent">
        Start
      </Link>
    </div>
  );
}
