"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-2xl text-orange-600">
                TigCase
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/about#contact"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                Contact
              </Link>
              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "hover:bg-orange-400 transition duration-200",
                })}
                href="/configure/upload"
              >
                Create Custom Case <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/about#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Contact
            </Link>
            <Link
                className={buttonVariants({
                  size: "sm",
                  className: "hover:bg-orange-400 transition duration-200",
                })}
                href="/configure/upload"
              >
                Create Custom Case <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
