export default function InputBox() {
  return (
    <>
      <div className="flex items-center justify-center">
        <form action="">
          <input
            type="text"
            className="shadow-[0_4px_4px_0_rgba(0, 0, 0, 0.25)] h-[2.75rem] w-[50rem] rounded-2xl bg-[#7D7D7D]"
          />
          <i className="fa-solid fa-paper-plane"></i>
        </form>
      </div>
    </>
  );
}
