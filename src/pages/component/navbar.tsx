import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="py-2">
        <nav className="flex w-full items-center justify-between">
          <p className="mx-10 text-2xl font-bold">
            Cura<span className="text-primary">AI</span>
          </p>
          <button className="mx-10 h-8 w-20 rounded-2xl bg-secondary text-center text-white">
            Log In
          </button>
        </nav>
      </header>
    </>
  );
}
