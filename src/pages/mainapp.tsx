import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import AiArt from "./component/aiart";
import ChatBox from "./component/chatbox";
import InputBox from "./component/inputbox";
import Footer from "./component/footer";

import { api } from "../utils/api";

const Mainapp: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <Navbar />
      <AiArt />
      <div className="bg-chatbox-dark">
        <ChatBox />
        <InputBox />
        <Footer color="text-white" />
      </div>
    </>
  );
};

export default Mainapp;
