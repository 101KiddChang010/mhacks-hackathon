import { useSession } from "next-auth/react";
//import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { type NextPage } from "next";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import ChatBox from "./component/chatbox";
import Footer from "./component/footer";

const Claire: NextPage = () => {
  const { data: sessionData } = useSession();
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [previousResponses, setPreviousResponses] = useState<string[]>([]);

  async function onSubmit(event: any) {
    event.preventDefault();
    setPreviousResponses((prev) => [...prev, "Human: " + userInput]);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          history: previousResponses.join("\n"),
          input: userInput,
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      console.log("prevResponses", previousResponses);
      setResult(data.result);
      setUserInput("");
      setPreviousResponses((prev) => [...prev, "Claire: " + data.result]);
    } catch (error: any) {
      // console.error(error);
      // alert(error.message);
    }
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

  return (
    <>
      <HtmlHead />
      <Navbar />
      <AiArt />
      <div className="flex flex-1 flex-col overflow-y-auto bg-chatbox-dark">
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-100">
          {previousResponses.map((text) => (
            <ChatBox
              text={
                text.slice(0, 7) == "Claire:" ? text.slice(7) : text.slice(6)
              }
              name={text.slice(0, 7) == "Claire:" ? "Claire" : null}
            />
          ))}
        </div>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-5 flex h-[2.75rem] w-[50rem] items-center justify-center overflow-hidden rounded-2xl rounded-l-xl bg-[#5D5F70] px-4 align-middle drop-shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)]"
        >
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            className="flex-1 bg-[#5D5F70] text-white focus:outline-none"
          />
          <button
            type="button"
            onClick={onSubmit}
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
