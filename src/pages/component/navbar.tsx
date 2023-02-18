import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="my-2">
        <nav className="flex w-full items-center justify-evenly">
          <p className="text-2xl font-bold">
            Cura<span className="text-primary">AI</span>
          </p>
          <button className="h-8 w-20 rounded-2xl bg-secondary text-center text-white">
            Log In
          </button>
        </nav>
      </header>
    </>
  );
}
