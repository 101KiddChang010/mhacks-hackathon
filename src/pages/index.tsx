import { type NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <HtmlHead />
      <Navbar />
      <div className="my-0 mx-auto flex max-w-screen-lg flex-1 flex-col items-center justify-center">
        <div className="mt-[4rem] flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-semibold">
            Introducing Cl
            <span className="text-primary">ai</span>re
          </h1>
          <p className="my-4 w-[56.5rem] text-center text-2xl">
            Your personalized AI medical assistant. Get accurate medical advice,
            quick diagnoses, and access to healthcare providers all in one
            place. Say goodbye to long wait times and hello to convenient
            healthcare management with Claire.
          </p>
          <div className="flex gap-2">
            <Link
              href="../mainapp"
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
              src="Claire2.png"
              alt="Claire AI Image"
              className="absolute top-0 right-[50%] z-0 h-[11.375rem] translate-x-[50%] drop-shadow-[0rem_0.125rem_0.125rem_rgba(0,0,0,0.12)] duration-200 hover:translate-y-[-0.5rem]"
            />
            <img
              src="showcase.jpg"
              alt="Image showcasing interaction with Claire"
              className="relative z-[1] mt-[10rem] w-[48.75rem] shadow-2xl"
            />
          </div>
          <div className="mt-[4.688rem]">
            <h2 className="text-2xl font-bold tracking-[.12rem] text-secondary">
              WHAT IS CLAIRE
            </h2>
            <p className="mt-[.5rem] text-sm font-medium">
              The innovative and intelligent solution to streamline your
              healthcare needs. Claire is an AI designed to assist you with
              personalized medical advice and connect you with the best
              healthcare providers. With the latest cutting-edge technology and
              advanced machine learning algorithms, our AI is capable of
              analyzing medical data, identifying symptoms, and providing
              accurate diagnoses. From to monitoring your health to scheduling
              appointments, Claire is your one-stop shop for all your medical
              needs. It’s a convenient and efficient way of managing your
              healthcare.
            </p>
          </div>
          <div className="mt-[4.688rem]">
            <h2 className="text-2xl font-bold tracking-[.12rem] text-secondary">
              HOW CLAIRE WORKS
            </h2>
            <p className="mt-[.5rem] text-sm font-medium">
              Claire is an innovative medical assistant AI that uses the latest
              breakthroughs in natural language processing and artificial
              intelligence to help people take charge of their health. Developed
              with the state-of-the-art GPT-3 language model, Claire is able to
              understand and respond to natural language queries in a way that
              is both accurate and empathetic. Whether you have a specific
              health concern or just need general guidance, Claire is here to
              help you every step of the way. <br />
              <br /> Claire's powerful capabilities are made possible by GPT-3's
              advanced machine learning algorithms, which allow it to analyze
              vast amounts of medical data and generate personalized responses
              based on your individual needs. With Claire, you can get quick and
              accurate medical advice, schedule appointments, and connect with
              healthcare providers from the comfort of your own home. Whether
              you're looking to manage a chronic condition or just want to stay
              healthy, Claire is your partner in achieving optimal health and
              well-being. <br />
              <br />
              One of the key benefits of Claire is its ability to adapt and
              learn as it interacts with patients. As it receives more data and
              feedback, Claire's responses become more accurate and
              personalized. This means that over time, Claire can become an even
              more effective medical assistant, providing patients with the most
              up-to-date and relevant information. With its cutting-edge
              technology and commitment to patient care, Claire is
              revolutionizing the healthcare industry and transforming the way
              people think about medical assistance.
            </p>
          </div>
          <div className="mt-[4.688rem] mb-[3rem]">
            <h3 className="flex justify-center text-2xl font-bold text-[#474750]">
              Powered By:
            </h3>
            <div className="mt-5 flex gap-[5.313rem]">
              <a href="https://openai.com">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                  className="max-h-[4.375rem] duration-300 hover:scale-110"
                  alt=""
                />
              </a>
              <a href="https://next-auth.js.org">
                <img
                  src="https://next-auth.js.org/img/logo/logo-sm.png"
                  alt=""
                  className="max-h-[4.375rem] duration-300 hover:scale-110"
                />
              </a>
              <a href="https://nextjs.org">
                <img
                  src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                  className="max-h-[4.375rem] duration-300 hover:scale-110"
                  alt=""
                />
              </a>
              <a href="https://reactjs.org">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                  className="max-h-[4.375rem] duration-300 hover:scale-110"
                  alt=""
                />
              </a>
              <a href="https://www.mongodb.com">
                <img
                  src="https://www.svgrepo.com/show/331488/mongodb.svg"
                  className="max-h-[4.375rem] duration-300 hover:scale-110"
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

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <></>
    // <div className="flex flex-col items-center justify-center gap-4">
    //   <p className="text-center text-2xl text-white">
    //     {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
    //     {secretMessage && <span> - {secretMessage}</span>}
    //   </p>
    //   <button
    //     className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
    //     onClick={sessionData ? () => void signOut() : () => void signIn()}
    //   >
    //     {sessionData ? "Sign out" : "Sign in"}
    //   </button>
    // </div>
  );
};
