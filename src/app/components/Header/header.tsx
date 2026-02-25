"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, BookMarked, Package, Star, LayoutGrid, GitFork } from "lucide-react";

const NAV_ITEMS = [
  { label: "Overview", href: "/repositories", icon: BookMarked },
  { label: "Repositories", href: "/repositories", icon: GitFork },
  { label: "Projects", href: "/repositories", icon: LayoutGrid },
  { label: "Packages", href: "/repositories", icon: Package },
  { label: "Stars", href: "/repositories", icon: Star },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background-secondary border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 lg:px-8 h-14">
        <div className="flex items-center gap-3">
          <Image src="/github.png" alt="GitHub logo" width={28} height={28} />
          <span className="text-foreground font-semibold text-sm">vigraton</span>
        </div>

        <div className="flex items-center gap-3">
          <Image
            className="rounded-full ring-2 ring-border"
            src="/profile.jpg"
            alt="Profile picture"
            width={32}
            height={32}
          />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden lg:flex items-center gap-1 px-4 lg:px-8 pb-0" role="navigation" aria-label="Profile navigation">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href && item.label === "Repositories";
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex items-center gap-1.5 text-sm px-3 py-2 rounded-t-md transition-colors ${
                isActive
                  ? "text-foreground font-semibold"
                  : "text-foreground-muted hover:text-foreground hover:bg-background-tertiary"
              }`}
            >
              <item.icon size={16} />
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border px-4 py-2 bg-background-secondary" role="navigation" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href && item.label === "Repositories";
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 text-sm px-3 py-2.5 rounded-md transition-colors ${
                  isActive
                    ? "text-foreground bg-background-tertiary font-semibold"
                    : "text-foreground-muted hover:text-foreground hover:bg-background-tertiary"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
