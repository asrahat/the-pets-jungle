"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@heroui/react";

import {
  Menu,
  X,
  LayoutDashboard,
  LogOut,
  User,
  PawPrint,
} from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const user = true;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "All Pets",
      href: "/pets",
    },
    {
      name: "My Requests",
      href: "/my-requests",
    },
    {
      name: "Add Pet",
      href: "/add-pet",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 shadow-lg transition-transform duration-300 group-hover:rotate-6">
            <PawPrint className="text-white" size={22} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              The Pets Jungle
            </h1>

            <p className="text-xs text-slate-500">
              Adopt Your Best Friend
            </p>
          </div>
        </Link>

  
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-medium text-slate-700 transition hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

{/*   
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <Link href="/login">
              <Button
                color="success"
                radius="full"
                className="px-6 font-semibold shadow-lg"
              >
                Login
              </Button>
            </Link>
          ) : (
            <div className="group relative">
              <button className="flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 pr-4 shadow-sm transition hover:shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300"
                  alt="profile"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div className="hidden text-left lg:block">
                  <p className="text-sm font-bold text-slate-800">
                    John Doe
                  </p>

                  <p className="text-xs text-slate-500">
                    Pet Lover
                  </p>
                </div>
              </button>

    
              
              {/* --- */}
              <div className="absolute right-0 top-14 hidden w-60 flex-col rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl group-hover:flex">
                <div className="border-b border-slate-100 px-4 py-3">
                  <p className="font-semibold text-slate-800">
                    Welcome Back 👋
                  </p>

                  <p className="truncate text-xs text-slate-500">
                    johndoe@gmail.com
                  </p>
                </div>

                <Link
                  href="/dashboard"
                  className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition hover:bg-slate-100"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition hover:bg-slate-100"
                >
                  <User size={18} />
                  Profile
                </Link>

                <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-red-500 transition hover:bg-red-50">
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            {/* </div>
          )}
        </div> */} 
        <div className="flex items-center gap-4">
            <Link href="/login">
               <Button
              as={Link}
              href="/pets"
              size="sm"
              radius="full"
              className="h-12 bg-green-600 px-6 text-base font-bold text-white shadow-2xl transition hover:scale-105"
            >
              Login
              <FaArrowRight />
            </Button>
            </Link>
            <Link href="/register">
               <Button
              as={Link}
              href="/pets"
              size="sm"
              radius="full"
              className="h-12 bg-green-600 px-6 text-base font-bold text-white shadow-2xl transition hover:scale-105"
            >
              Register
              <FaArrowRight />
            </Button>
            </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl p-2 transition hover:bg-slate-100 md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[300px] bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-5 py-5">
          <div className="flex items-center gap-2">
            <PawPrint className="text-green-600" />

            <h2 className="text-lg font-bold">
              The Pets Jungle
            </h2>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X />
          </button>
        </div>

        <div className="flex flex-col p-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-6 border-t pt-6">
            {!user ? (
              <Link href="/login">
                <Button
                  fullWidth
                  color="success"
                  radius="full"
                  className="font-semibold"
                >
                  Login
                </Button>
              </Link>
            ) : (
              <div className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50">
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}
    </nav>
  );
};

export default NavBar;