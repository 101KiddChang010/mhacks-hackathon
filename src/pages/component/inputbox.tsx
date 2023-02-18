export default function InputBox() {
  return (
    <>
      <form action="" className="flex items-center justify-center">
        <input
          type="text"
          className="h-[2.75rem] w-[50rem] overflow-hidden rounded-l-2xl bg-[#5D5F70] pl-5 text-white shadow-xl focus:outline-none"
        />
        <div className="flex h-[2.75rem] w-[2.5rem] items-center justify-start rounded-r-2xl bg-[#5D5F70]">
          <button className="pr-3">
            <i className="fa-regular fa-paper-plane fa-xl text-white"></i>
          </button>
        </div>
      </form>
    </>
  );
}
