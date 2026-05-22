import Link from "next/link";
import { Button } from "@heroui/react";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4">

      {/* BACKGROUND BLUR */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

      {/* CARD */}
      <div className="relative w-full max-w-2xl rounded-[32px] border border-white/30 bg-white/70 p-10 text-center shadow-2xl backdrop-blur-xl md:p-16">

        {/* 404 */}
        <h1 className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-8xl font-black text-transparent md:text-9xl">
          404
        </h1>

        {/* TITLE */}
        <h2 className="mt-6 text-3xl font-black text-slate-900 md:text-4xl">
          Page Not Found
        </h2>

        {/* MESSAGE */}
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-500 md:text-lg">
          Oops! The page you are looking for does not exist or may have been moved.
        </p>

        {/* BUTTON */}
        <div className="mt-10">
          <Link href="/">
            <Button
              size="lg"
              radius="full"
              className="bg-gradient-to-r from-green-600 to-emerald-500 px-10 font-bold text-white shadow-xl transition hover:scale-105"
            >
              Back to Home
            </Button>
          </Link>
        </div>

        {/* SMALL TEXT */}
        <p className="mt-6 text-sm text-slate-400">
          Pet Jungle 🐾
        </p>
      </div>
    </div>
  );
};

export default NotFound;