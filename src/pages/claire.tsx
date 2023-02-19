import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { type NextPage } from "next";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import ChatBox from "./component/chatbox";
import Footer from "./component/footer";

const Claire: NextPage = () => {
  const { data: sessionData } = useSession();
  //const router = useRouter();

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: process.env.CLAIRE_PROMPT,
    temperature: 0.01,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });

  console.log("Response:", response);

  //if (!sessionData?.user) {
    // Redirects user to Index Page if not logged in.
    // alert("You have to be logged in to access the AI");
    // router.push("/");
    //router.push("/api/auth/signin");
    //return null;
    return (
      <>
        <HtmlHead />
        <Navbar />
        <div className="align-center absolute top-[50%] right-[50%] flex translate-x-[50%] translate-y-[-50%] flex-col items-center justify-center">
          <img
            src="/claire-oof.png"
            className="max-h-[18rem] max-w-[11.875rem]"
          ></img>
          <div className="flex flex-col">
            <h2 className="flex items-center justify-center text-center text-[4rem] font-bold text-primary lg:text-[6rem]">
              Sorry!
            </h2>
            <h2 className="flex items-center justify-center text-center font-bold text-secondary sm:text-lg lg:text-xl">
              To Access Claire You First Have To Log In.
            </h2>
          </div>
        </div>
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
      <div className="flex justify-center py-1 align-middle">
        <div className="flex flex-col justify-center text-center">
          <img
            src="claire-smile.png"
            alt="Claire AI Art Made by CyanLolly"
            className="h-[10rem] w-auto drop-shadow-[0rem_0.125rem_0.25rem_rgba(0,0,0,0.12)] sm:h-[13.125rem]"
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
