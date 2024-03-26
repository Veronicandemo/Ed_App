export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-grow flex-col space-y-2 bg-zinc-100 ">
      {children}
    </div>
  );
}
