// use to create structures for all pages in the website
//this is used to put content of pages in center in below div like discover create podcast in center wehn we click them in sidebar
import LeftSidebar from "@/components/LeftSidebar";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster"
import RightSidebar from "@/components/RightSidebar";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
    <main className="relative flex bg-black-3">
      <LeftSidebar />
      
      <section className=" border-2 border-red-500 flex min-h-screen flex-1 flex-col px-4 sm:px-14">
        <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
          <div className="flex h-16 items-center justify-between md:hidden">
            <Image 
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="menu icon"
            />
            <MobileNav />
          </div>
          <div className="flex flex-col md:pb-14">
            <Toaster />

            {children}
          </div>
        </div>
      </section>

      <RightSidebar />
    </main>

   
  </div>

  );
}
