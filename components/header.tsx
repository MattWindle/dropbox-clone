import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg"
            alt="logo"
            height={50}
            width={50}
            className="p-2"
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        {/* Theme Toggle */}
        <UserButton afterSignOutUrl="/" />
        <ThemeToggle />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
