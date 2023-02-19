import { type NextPage } from "next";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";
import ChatBox from "./component/chatbox";
import Footer from "./component/footer";

const Mainapp: NextPage = () => {
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

export default Mainapp;

const AiArt: React.FC = () => {
  return (
    <>
      <div className="flex h-[18.75rem] justify-center align-middle">
        <div className="flex flex-col justify-center text-center">
          <img
            src="Claire2.png"
            alt="Claire AI Art Made by CyanLolly"
            className="'h-[14.5rem] w-[11.875rem]"
          />
          {/* <img src="Cain.png" alt="Claire AI Art Made by CyanLolly" className="'h-[14.5rem] w-[11.875rem]" /> */}
          <h3 className="text-2xl font-medium text-secondary">
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
      <form action="" className="flex items-center justify-center">
        <input
          type="text"
          className="h-[2.75rem] w-[50rem] overflow-hidden rounded-l-2xl bg-[#5D5F70] pl-5 text-white shadow-xl focus:outline-none"
        />
        <div className="flex h-[2.75rem] w-[2.5rem] items-center justify-start rounded-r-2xl bg-[#5D5F70]">
          <button className="pr-3 text-center duration-300 hover:scale-110">
            <i className="fa-regular fa-paper-plane fa-xl text-white"></i>
          </button>
        </div>
      </form>
    </>
  );
};
