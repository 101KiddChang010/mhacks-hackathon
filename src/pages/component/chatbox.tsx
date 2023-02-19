interface chatInputs {
  name?: string | null | undefined;
  text: string | null | undefined;
}

const ChatBox: React.FC<chatInputs> = (props) => {
  return (
    <>
      <div
        className={
          props?.name ? "bg-chatbox-dark py-4" : "bg-chatbox-light py-4"
        }
      >
        <div className="mx-auto my-auto flex w-[90vw] lg:w-[60vw]">
          <p className="w-[3.125rem] text-xs text-white">
            {props?.name ? props.name + ": " : null}
          </p>
          <p className="flex-1 pl-5 text-xs text-white">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
