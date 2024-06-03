import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>CPRG 306: Web Development 2 - Assignments</header>
      <div>
        <Link href="http://localhost:3000/week-2" target="blank">Week 2</Link>
      </div>
      <div>
      <Link href="http://localhost:3000/week-3" target="blank">Week 3</Link>
      </div>
      <div>
        <Link href="http://localhost:3000/week-4" target="blank">Week 4</Link>
      </div>
    </main>
  );
}
