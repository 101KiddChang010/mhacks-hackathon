import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

export default function Navbar() {
  return (
    <>
<<<<<<< HEAD
      <header className="py-2">
        <nav className="flex w-full items-center justify-between">
          <p className="ml-[5rem] text-2xl font-bold">
            Cura<span className="text-primary">AI</span>
          </p>
          <Auth />
=======
      <header>
        <nav className="mx-auto flex w-full items-center py-2 sm:w-[90vw] lg:w-[60vw]">
          <Link href="../" className="flex-1 text-2xl font-bold">
            Cura<span className="text-primary">AI</span>
          </Link>
          <button className="mx-10 h-8 w-20 rounded-2xl bg-secondary text-center text-white">
            Log In
          </button>
>>>>>>> ddb9606a077ac898b89fd871d581473caf8e6ac9
        </nav>
      </header>
    </>
  );
}

const Auth = (props: any) => {
  const { data: sessionData } = useSession();

  return (
    <>
      {sessionData?.user ? (
        <i className="fa-solid fa-user fa-xl mr-[5rem]" />
      ) : (
        <button
          onClick={() => void signIn()}
          className="mx-10 h-8 w-20 rounded-2xl bg-secondary text-center text-white"
        >
          Log In
        </button>
      )}
    </>
  );
};
