import Link from "next/link";

export default function Head() {
  return (
    <header className="w-full text-center border-y-2 border-sunflower">
      <Link href="/">
        <a>
          <h1 className="text-xl uppercase font-bold my-4 text-sunflower">
            Otrávené deště
          </h1>
        </a>
      </Link>
    </header>
  );
}
