import { useSession } from "next-auth/react";
//import { useRouter } from "next/router";
import { useState } from "react";
import { type NextPage } from "next";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import ChatBox from "./component/chatbox";
import Footer from "./component/footer";

const Claire: NextPage = () => {
  const { data: sessionData } = useSession();

  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const openAIKey = process.env.OPENAI_API_KEY;
  const clairePrompt = process.env.CLAIRE_PROMPT;

  const APIBody = {
    model: "text-davinci-003",
    prompt: process.env.CLAIRE_PROMPT,
    max_tokens: 7,
    temperature: 0.01,
  };

  async function callOpenAIAPI(params: any) {
    console.log("Calling the OpenAI API");
    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
        // Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  if (!sessionData?.user) {
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

  console.log(userInput);
  // console.log("Process Env:", process.env);
  console.log("Prompt:", process.env.CLAIRE_PROMPT);
  console.log("KEY:", process.env.OPENAI_API_KEY);

  return (
    <>
      <HtmlHead />
      <Navbar />
      <AiArt />
      <div className="flex flex-1 flex-col overflow-y-auto bg-chatbox-dark">
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-100">
          <ChatBox text={response} />
          {/* <ChatBox
            text={
              "Hello Claire, I am feeling a bit tired lately and feel weak in general. What do you recommend me to do?"
            }
          />
          <ChatBox
            name={"Claire"}
            text={
              "I recommend that you get plenty of rest, stay hydrated, and eat a balanced diet. Additionally, you may want to consider taking a multivitamin or supplement to ensure you are getting all the necessary nutrients. Exercise can also help boost your energy levels."
            }
          /> */}
        </div>
        <form
          action=""
          className="mx-auto mt-5 flex h-[2.75rem] w-[50rem] items-center justify-center overflow-hidden rounded-2xl rounded-l-xl bg-[#5D5F70] px-4 align-middle drop-shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)]"
        >
          <input
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            className="flex-1 bg-[#5D5F70] text-white focus:outline-none"
          />
          <button
            type="button"
            onClick={callOpenAIAPI}
            className=" bg-red-500fa-xl h-[100%] w-[2.5rem] text-center text-xl duration-300 hover:scale-110"
          >
            <i className="fa-regular fa-paper-plane text-white"></i>
          </button>
        </form>
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

// const InputBox: React.FC = () => {
//   return (
//     <>
//       <form
//         action=""
//         className="mx-auto mt-5 flex h-[2.75rem] w-[50rem] items-center justify-center overflow-hidden rounded-2xl rounded-l-xl bg-[#5D5F70] px-4 align-middle drop-shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)]"
//       >
//         <input
//           onChange={(e) => setUserInput(e.target)}
//           type="text"
//           className="flex-1 bg-[#5D5F70] text-white focus:outline-none"
//         />
//         <button className=" bg-red-500fa-xl h-[100%] w-[2.5rem] text-center text-xl duration-300 hover:scale-110">
//           <i className="fa-regular fa-paper-plane text-white"></i>
//         </button>
//       </form>
//     </>
//   );
// };
