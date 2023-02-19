import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="mx-auto flex w-full items-center py-2 sm:w-[90vw] lg:w-[60vw]">
          <Link href="../" className="flex-1 text-2xl font-bold">
            Cura<span className="text-primary">AI</span>
          </Link>
          <button className="mx-10 h-8 w-20 rounded-2xl bg-secondary text-center text-white">
            Log In
          </button>
        </nav>
      </header>
    </>
  );
}
