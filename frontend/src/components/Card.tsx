export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="right bg-white h-1/2 w-1/4 p-8 rounded-xl drop-shadow-xl">
      {children}
    </div>
  );
}
