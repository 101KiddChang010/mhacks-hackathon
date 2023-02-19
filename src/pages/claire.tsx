import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { type NextPage } from "next";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import ChatBox from "./component/chatbox";
import Footer from "./component/footer";

const Claire: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  if (!sessionData?.user) {
    // Redirects user to Index Page if not logged in.
    // alert("You have to be logged in to access the AI");
    // router.push("/");
    //router.push("/api/auth/signin");
    //return null;
    return (
      <>
        <HtmlHead />
        <Navbar />
        <h2>You Need To Log In To Access Claire</h2>
      </>
    );
  }

  return (
    <>
      <HtmlHead />
      <Navbar />
      <AiArt />
      <div className="flex flex-1 flex-col overflow-y-auto bg-chatbox-dark">
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-100">
          <ChatBox
            text={
              "Hello Claire, I am feeling a bit tired lately and feel weak in general. What do you recommend me to do?"
            }
          />
          <ChatBox
            name={"Claire"}
            text={
              "I recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensure you are getting all the necessary nutrients. Exercise can also help boost your energy levels."
            }
          />
          <ChatBox
            text={
              "Hello Claire, I am feeling a bit tired lately and feel weak in general. What do you recommend me to do?"
            }
          />
          <ChatBox
            name={"Claire"}
            text={
              "I recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to enI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensursure you are getting all the necessary nutrients. Exercise can also help boost your energy levels."
            }
          />
          <ChatBox
            text={
              "I recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to enI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensursure you are getting all the necessary nutrients. Exercise can also help boost your energy levels."
            }
          />
          <ChatBox
            name={"Claire"}
            text={
              "I recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to enI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensurI recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensursure you are getting all the necessary nutrients. Exercise can also help boost your energy levels."
            }
          />
        </div>
        <InputBox />
        <Footer color="text-white" />
      </div>
    </>
  );
};

export default Claire;

const AiArt: React.FC = () => {
  return (
    <>
      <div className="flex h-[18.75rem] justify-center align-middle">
        <div className="flex flex-col justify-center text-center">
          <img
            src="claire-smile.png"
            alt="Claire AI Art Made by CyanLolly"
            className="'h-[14.5rem] w-[11.875rem] drop-shadow-[0rem_0.125rem_0.25rem_rgba(0,0,0,0.12)]"
          />
          <h3 className="text-2xl font-medium text-secondary drop-shadow-[0rem_0.125rem_0.25rem_rgba(0,0,0,0.25)]">
            Cl<span className="text-primary">ai</span>re
          </h3>
        </div>
      </div>
    </>
  );
};

const InputBox: React.FC = () => {
  return (
    <>
      <form
        action=""
        className="mx-auto mt-5 flex h-[2.75rem] w-[50rem] items-center justify-center overflow-hidden rounded-2xl rounded-l-xl bg-[#5D5F70] px-4 align-middle drop-shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)]"
      >
        <input
          type="text"
          className="flex-1 bg-[#5D5F70] text-white focus:outline-none"
        />
        <button className=" bg-red-500fa-xl h-[100%] w-[2.5rem] text-center text-xl duration-300 hover:scale-110">
          <i className="fa-regular fa-paper-plane text-white"></i>
        </button>
      </form>
    </>
  );
};
