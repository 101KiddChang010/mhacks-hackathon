export default function Footer(props: any) {
  return (
    <>
      <div className="py-2">
        <p
          className={`flex items-center justify-center text-sm font-medium tracking-[.165rem] ${props.color}`}
        >
          Copyright &copy; 2023 | Bryan Lor & Kidd Chang
        </p>
      </div>
    </>
  );
}
