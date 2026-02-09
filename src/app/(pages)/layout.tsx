import Menubar from "./components/Menubar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="hidden lg:block">
        <Menubar />
      </div>

      {children}
    </div>
  );
}
