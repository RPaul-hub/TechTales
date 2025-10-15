import SideNav from "../ui/components/side-nav";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="flex flex-col bg-white">
            <div className="w-full">
                <SideNav />
            </div>
            <div className="mx-20">
                {children}
            </div>
        </div>

    </>
  );
}