"use client";

import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPaw,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
  
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 shadow-lg">
                <FaPaw className="text-xl text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  The Pets Jungle
                </h2>

                <p className="text-sm text-slate-500">
                  Find your forever friend 🐾
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Helping pets find loving homes and connecting
              families with adorable companions around the world.
            </p>

        
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-100 p-3 transition hover:bg-green-100 hover:text-green-600"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-100 p-3 transition hover:bg-green-100 hover:text-green-600"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-100 p-3 transition hover:bg-green-100 hover:text-green-600"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>

    
          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-600">
              <Link
                href="/"
                className="transition hover:text-green-600"
              >
                Home
              </Link>

              <Link
                href="/pets"
                className="transition hover:text-green-600"
              >
                All Pets
              </Link>

              <Link
                href="/my-requests"
                className="transition hover:text-green-600"
              >
                My Requests
              </Link>

              <Link
                href="/add-pet"
                className="transition hover:text-green-600"
              >
                Add Pet
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Support
            </h3>

            <div className="flex flex-col gap-3 text-slate-600">
              <Link
                href="/privacy-policy"
                className="transition hover:text-green-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-green-600"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-green-600"
              >
                Contact Us
              </Link>

              <Link
                href="/faq"
                className="transition hover:text-green-600"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-600">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-green-600" />

                <p className="text-sm leading-6">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600" />

                <p className="text-sm">
                  +880 1234-567890
                </p>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-xl text-green-600" />

                <p className="text-sm">
                  support@thepetsjungle.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 The Pets Jungle. All rights reserved.
          </p>

          <p>
            Made with ❤️ for pet lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;