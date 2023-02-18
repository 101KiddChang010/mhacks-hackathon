export default function Footer(props: any) {
  return (
    <>
      <div>
        <p
          className={`my-2 flex items-center justify-center text-sm font-medium tracking-[.165rem] ${props.color}`}
        >
          Copyright &copy; 2023 | Bryan Lor & Kidd Chang
        </p>
      </div>
    </>
  );
}
