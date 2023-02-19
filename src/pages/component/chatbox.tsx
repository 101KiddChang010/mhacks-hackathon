export default function ChatBox(props: any) {
  return (
    <>
      <div className="h-[16.5rem] flex-1">
        <UserChat />
        <AiChat />
      </div>
    </>
  );
}

const UserChat = (props: any) => {
  return (
    <>
      <div className="h-20 bg-chatbox-light">
        <div className="mx-auto flex sm:w-[90vw] lg:w-[60vw]">
          <p className="text-whitepr-5 w-[3.125rem]"></p>
          <p className="pl-5 text-white">
            Hello Claire, I am feeling a bit tired lately and feel weak in
            general. What do you recommend me to do?
          </p>
        </div>
      </div>
    </>
  );
};

const AiChat = (props: any) => {
  return (
    <>
      <div className="mx-auto h-20">
        <div className="mx-auto flex sm:w-[90vw] lg:w-[60vw]">
          <p className="w-[3.125rem] text-white ">Claire:</p>
          <p className="pl-5 text-white">
            I recommend that you get plenty of rest, stay hydrated, and eat a
            balanced diet. Additionally, you may want to consider taking a
            multivitamin or supplement to ensure you are getting all the
            necessary nutrients. Exercise can also help boost your energy
            levels.
          </p>
        </div>
      </div>
    </>
  );
};
