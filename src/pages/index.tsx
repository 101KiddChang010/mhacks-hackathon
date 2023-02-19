import { type NextPage } from "next";
import Link from "next/link";
//import { useSession } from "next-auth/react";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

//import { api } from "../utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <HtmlHead />
      <Navbar />
      <div className="my-0 mx-auto flex max-w-screen-lg flex-1 flex-col items-center justify-center">
        <div className="mt-[4rem] flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-semibold sm:text-5xl">
            Meet Cl
            <span className="text-primary">ai</span>re
          </h1>
          <p className="my-4 w-[90vw] text-center text-xs sm:text-2xl lg:w-[56.5rem]">
            Your personalized AI medical assistant. Get accurate medical advice,
            quick diagnoses, and access to healthcare providers. Say goodbye to
            long wait times and hello to convenient healthcare assistance with
            Claire.
          </p>
          <div className="flex gap-2">
            <Link
              href="./claire"
              className="flex h-8 w-[6.5rem] items-center justify-center rounded-2xl bg-secondary py-5 text-center text-sm text-white duration-300 hover:scale-105"
            >
              <span>Get Started</span>
            </Link>
            <a
              href="https://github.com/101KiddChang010/mhacks-hackathon"
              className="flex h-8 w-[6.5rem] items-center justify-center rounded-2xl bg-primary py-5 text-center text-sm text-white duration-300 hover:scale-105"
            >
              <span>GitHub Repo</span>
            </a>
          </div>
          <div className="relative my-8">
            <img
              src="claire-talk.png"
              alt="Claire AI Image"
              className="sm-top-0 absolute right-[50%]  z-0 h-[10rem] translate-x-[50%] drop-shadow-[0rem_0.125rem_0.125rem_rgba(0,0,0,0.12)] duration-200 hover:translate-y-[-0.5rem] max-sm:top-5 sm:h-[11.375rem]"
            />
            <img
              src="showcase.jpg"
              alt="Image showcasing interaction with Claire"
              className="relative z-[1] mt-[10rem] h-auto w-[78vw] shadow-2xl lg:w-[48.75rem]"
            />
          </div>
          <div className="mt-[4.688rem]">
            <h2 className="text-xl font-bold tracking-[.12rem] text-secondary sm:text-2xl">
              WHO IS CLAIRE
            </h2>
            <p className="mt-[.5rem] w-[90vw] text-sm font-medium max-sm:text-xs lg:w-[62.5rem]">
              Claire is an innovative medical assistant AI that uses the latest
              breakthroughs in natural language processing and artificial
              intelligence to help you take charge of your health. She's
              designed to assist you with personalized medical advice and
              connect you with the best healthcare providers. Whether you're
              looking to manage a chronic condition or for simple medical
              advice, Claire is your personalized medical assistant to achieving
              optimal health and well-being.
            </p>
          </div>
          <div className="mt-[4.688rem]">
            <h2 className="text-xl font-bold tracking-[.12rem] text-secondary sm:text-2xl">
              HOW CLAIRE WORKS
            </h2>
            <p className="mt-[.5rem] w-[90vw] text-sm font-medium max-sm:text-xs lg:w-[62.5rem]">
              Developed with OpenAI's GPT-3 language model, Claire's powerful
              capabilities are made possible by GPT-3's advanced machine
              learning algorithms. As she learns to adapt and interact by
              receiving more data and feedback, her responses become more
              accurate and personalized. Allowing her to analyze vast amounts of
              medical data and create personalized responses based on you.
              Claire is able to understand and respond in such a way that is
              accurate, realistic, and empathetic like a real human-being. With
              her cutting-edge technology and commitment to patient care, Claire
              is revolutionizing the healthcare industry by making medical
              assistance easily accessible through technology.
            </p>
          </div>
          <div className="mt-[4.688rem] mb-[3rem]">
            <h3 className="flex justify-center text-xl font-bold text-[#474750] sm:text-2xl">
              Powered By:
            </h3>
            <div className="mt-5 flex gap-7 px-4 md:gap-[5.313rem]">
              <a href="https://openai.com">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                  className="max-h-[4.375rem] w-auto duration-300 hover:scale-110 md:h-[25rem]"
                  alt=""
                />
              </a>
              <a href="https://next-auth.js.org">
                <img
                  src="https://next-auth.js.org/img/logo/logo-sm.png"
                  alt=""
                  className="max-h-[4.375rem] w-auto duration-300 hover:scale-110 md:h-[25rem]"
                />
              </a>
              <a href="https://nextjs.org">
                <img
                  src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                  className="max-h-[4.375rem] w-auto duration-300 hover:scale-110 md:h-[25rem]"
                  alt=""
                />
              </a>
              <a href="https://reactjs.org">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                  className="max-h-[4.375rem] w-auto duration-300 hover:scale-110 md:h-[25rem]"
                  alt=""
                />
              </a>
              <a href="https://www.mongodb.com">
                <img
                  src="https://www.svgrepo.com/show/331488/mongodb.svg"
                  className="max-h-[4.375rem] w-auto duration-300 hover:scale-110 md:h-[25rem]"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer color="text-[#323232]" />
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <></>
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
