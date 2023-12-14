import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <div className="dark:bg-slate-800 bg-[#3984ff] py-16 p-6 dark:text-white text-gray-100 flex ">
        <div>
          <h1 className="text-6xl font-bold mb-6">Welcome to Dropbox</h1>
          <p className="text-4xl font-semibold mb-4">
            Store everything you need all in one place...
          </p>
          <p>
            Bring your entire workflow together on one integrated platform that
            works with the tools you already use. Edit PDFs, share videos, sign
            documents and collaborate seamlessly with internal and external
            stakeholders – all without leaving Dropbox.
          </p>
        </div>
      </div>
    </main>
  );
}
