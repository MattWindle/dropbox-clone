import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <h1>Hello World</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
