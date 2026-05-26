import React from "react";
import { Button } from "@/components/ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#4D9078]/90 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={50}
              height={50}
              className="h-11 w-11 rounded-xl object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-white font-bold text-xl tracking-wide">
              CarrerMind
            </h1>
            <p className="text-white/70 text-xs -mt-1">
              AI Career Platform
            </p>
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">

          <SignedIn>

            {/* Dashboard */}
            <Link href="/dashboard">
              <Button
                className="
    hidden md:flex 
    items-center gap-2 
    bg-white 
    text-[#4D9078] 
    hover:bg-white/90 
    hover:text-[#4D9078]
    rounded-xl 
    shadow-lg
    font-medium
    "
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>

              <Button
                className="
    md:hidden 
    bg-white 
    text-[#4D9078] 
    hover:bg-white/90 
    w-10 
    h-10 
    rounded-xl 
    p-0
    shadow-lg
    "
              >
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            {/* Growth Tools */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-white text-[#4D9078] hover:bg-white/90 rounded-xl font-medium shadow-lg">
                  <StarsIcon className="h-4 w-4" />

                  <span className="hidden md:block">
                    Growth Tools
                  </span>

                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-56 rounded-2xl border-0 bg-white p-2 shadow-2xl"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/resume"
                    className="flex items-center gap-3 rounded-lg cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-[#4D9078]" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-3 rounded-lg cursor-pointer"
                  >
                    <PenBox className="h-4 w-4 text-[#4D9078]" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/interview"
                    className="flex items-center gap-3 rounded-lg cursor-pointer"
                  >
                    <GraduationCap className="h-4 w-4 text-[#4D9078]" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Sign In */}
          <SignedOut>
            <SignInButton>
              <Button className="bg-white text-[#4D9078] hover:bg-white/90 rounded-xl px-5">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          {/* User */}
          <SignedIn>
            <div className="scale-90">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "w-10 h-10 ring-2 ring-white/30",
                    userButtonPopoverCard:
                      "shadow-2xl rounded-2xl",
                    userPreviewMainIdentifier:
                      "font-semibold",
                  },
                }}
                afterSignOutUrl="/"
              />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;