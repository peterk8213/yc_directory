import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="platform-logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  console.log("sign out");
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <div className="border-3 border-black">
                <Link href={`/user/${session?.id}`}>
                  <Image
                    src={
                      session?.user?.image ??
                      "https://api.dicebear.com/9.x/adventurer/png"
                    }
                    alt="platform-logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Link>
              </div>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                console.log("sign in");
                await signIn("github");
              }}
            >
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
