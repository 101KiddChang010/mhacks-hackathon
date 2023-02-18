import { type NextPage } from "next";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import AiArt from "./component/aiart";
import ChatBox from "./component/chatbox";
import InputBox from "./component/inputbox";
import Footer from "./component/footer";

const Mainapp: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <Navbar />
      <AiArt />
      <div className="flex flex-1 flex-col bg-chatbox-dark">
        <ChatBox />
        <InputBox />
        <Footer color="text-white" />
      </div>
    </>
  );
};

export default Mainapp;
