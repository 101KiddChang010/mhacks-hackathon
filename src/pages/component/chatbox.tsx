export default function ChatBox(props: any) {
  return (
    <>
      <div className="h-[16.5rem]">
        <UserChat />
        <AiChat />
      </div>
    </>
  );
}

const UserChat = (props: any) => {
  return (
    <>
      <div className="flex h-20 items-center justify-center bg-chatbox-light">
        <div className="flex w-[90vw] text-left">
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
      <div className="flex h-20 items-center justify-center">
        <div className="flex w-[90vw] text-left">
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
