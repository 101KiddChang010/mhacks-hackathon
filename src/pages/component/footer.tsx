export default function Footer(props: any) {
  return (
    <>
      <div className="py-2.5">
        <p
          className={`flex items-center justify-center text-xs ${props.color}`}
        >
          Copyright &copy; 2023 | Bryan Lor & Kidd Chang
        </p>
      </div>
    </>
  );
}
