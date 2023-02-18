export default function InputBox() {
  return (
    <>
      <div className="flex items-center justify-center">
        <form action="" className="flex">
          <input
            type="text"
            className="shadow-[0_4px_4px_0_rgba(0, 0, 0, 0.25)] h-[2.75rem] w-[50rem] rounded-l-2xl bg-[#6a6a6a] pl-5 text-white focus:outline-none"
          />
          <div className="flex h-[2.75rem] w-[2.5rem] items-center justify-start rounded-r-2xl bg-[#6a6a6a]">
            <button className="pl-1">
              <i className="fa-regular fa-paper-plane fa-xl text-white"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
