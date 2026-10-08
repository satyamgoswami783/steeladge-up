"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MapPin, Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { mainNavItems } from "@/data/navigation";
import { companyData } from "@/data/company";

function isRouteActive(currentPathname: string, targetHref: string): boolean {
  if (!currentPathname || !targetHref) return false;
  const current = currentPathname.toLowerCase().replace(/\/+$/, "") || "/";
  const target = targetHref.toLowerCase().replace(/\/+$/, "") || "/";
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}

function isSubItemActive(currentPathname: string, targetHref: string): boolean {
  if (!currentPathname || !targetHref) return false;
  const current = currentPathname.toLowerCase().replace(/\/+$/, "") || "/";
  const target = targetHref.toLowerCase().replace(/\/+$/, "") || "/";
  return current === target;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(true);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initial check on mount (especially if URL has hash)
    setScrolled(window.scrollY > 20);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleLinkClick = (targetHref: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    if (isRouteActive(pathname, targetHref)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-200 ${
        scrolled
          ? "bg-[#08171A]/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(8,23,26,0.8)] border-b border-white/10"
          : "bg-gradient-to-b from-[#08171A]/95 via-[#08171A]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="light" size="md" />

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-7 select-none"
            aria-label="Main Navigation"
          >
            {mainNavItems.map((item) => {
              const isActive = isRouteActive(pathname, item.href);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="inline-flex items-center">
                      <Link
                        href={item.href}
                        prefetch={true}
                        onClick={() => handleLinkClick(item.href)}
                        className={`relative inline-flex items-center text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer py-1.5 ${
                          isActive
                            ? "text-[#D3A15D]"
                            : "text-stone-200 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive ? (
                          <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C89552] rounded-full shadow-[0_1px_6px_rgba(200,149,82,0.8)]" />
                        ) : (
                          <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                        )}
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDropdownOpen((prev) => !prev);
                        }}
                        className="p-1 ml-0.5 text-stone-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                        aria-label="Toggle submenu"
                        aria-expanded={dropdownOpen}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            dropdownOpen ? "rotate-180 text-[#D3A15D]" : isActive ? "text-[#D3A15D]" : "text-stone-400 group-hover:text-white"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu Dropdown Container */}
                    <div
                      className={`absolute top-full left-0 w-[340px] pt-2 z-[1050] transition-all duration-150 ${
                        dropdownOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto"
                      }`}
                    >
                      <div className="bg-[#0B2025]/98 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2 space-y-1.5 ring-1 ring-black/50">
                        {item.children.map((subItem) => {
                          const isSubActive = isSubItemActive(pathname, subItem.href);
                          const isAll = subItem.label.includes("ALL");
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              prefetch={true}
                              onClick={() => handleLinkClick(subItem.href)}
                              className={`group/sub block p-3 transition-all duration-150 rounded-none cursor-pointer border ${
                                isSubActive
                                  ? "bg-[#C89552]/20 border-[#C89552]/70 text-white"
                                  : isAll
                                  ? "mb-1.5 pb-3 border-b border-white/15 bg-white/5 hover:bg-[#C89552]/20 hover:border-[#C89552]/40"
                                  : "border-transparent hover:bg-white/10 hover:border-white/10"
                              }`}
                            >
                              <div
                                className={`text-xs font-bold transition-colors flex items-center justify-between ${
                                  isSubActive || isAll
                                    ? "text-[#D3A15D]"
                                    : "text-stone-100 group-hover/sub:text-[#D3A15D]"
                                }`}
                              >
                                <span className="tracking-wide uppercase text-[11px] font-extrabold">{subItem.label}</span>
                                <ArrowRight
                                  className={`w-3.5 h-3.5 transition-all duration-150 text-[#D3A15D] ${
                                    isSubActive || isAll
                                      ? "opacity-100 translate-x-0"
                                      : "opacity-60 group-hover/sub:opacity-100 group-hover/sub:translate-x-1"
                                  }`}
                                />
                              </div>
                              {subItem.description && (
                                <p className="text-[11px] text-stone-300 group-hover/sub:text-stone-200 line-clamp-1 mt-1 font-normal leading-tight">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={true}
                  onClick={() => handleLinkClick(item.href)}
                  className={`group relative text-xs font-bold tracking-widest uppercase transition-colors py-2 cursor-pointer ${
                    isActive
                      ? "text-[#D3A15D]"
                      : "text-stone-200 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C89552] rounded-full shadow-[0_1px_6px_rgba(200,149,82,0.8)]" />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Direct & Primary CTA */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-xs tracking-wider">
              {/* Phone Quick-Dial */}
              <a
                href={`tel:${companyData.contact.phoneRaw}`}
                className="flex items-center gap-1.5 text-stone-200 hover:text-[#D3A15D] font-semibold transition-colors group cursor-pointer"
                title="Direct construction estimator hotline"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89552] group-hover:scale-110 transition-transform" />
                <span>{companyData.contact.phone}</span>
              </a>

              {/* Surrey Headquarters badge */}
              <div className="flex items-center gap-1 text-[11px] text-stone-300">
                <MapPin className="w-3 h-3 text-[#C89552]" />
                <span className="uppercase tracking-widest font-medium">Surrey, BC</span>
              </div>
            </div>

            {/* START A PROJECT CTA */}
            <Button
              href="/contact/#quote-form"
              variant="primary"
              size="sm"
              className="bg-[#C89552] hover:bg-[#B8803D] border-[#C89552] text-white shadow-lg font-bold"
              onClick={() => {
                if (pathname.includes("/contact")) {
                  const el = document.getElementById("quote-form");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    const input = document.getElementById("fullName");
                    if (input) (input as HTMLElement).focus();
                  }
                }
              }}
            >
              START A PROJECT →
            </Button>
          </div>

          {/* Mobile Actions & Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Quick Direct Call Icon Button */}
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="flex items-center justify-center w-9 h-9 rounded-md bg-[#C89552]/20 text-[#D3A15D] border border-[#C89552]/50 hover:bg-[#C89552] hover:text-white transition-all shadow-sm active:scale-95 touch-manipulation"
              aria-label="Call Steelage Construction"
              title={`Call ${companyData.contact.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Quick CTA on tablets / medium screens */}
            <Button
              href="/contact/#quote-form"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex text-[11px] px-3 py-1.5 bg-[#C89552] text-white font-bold tracking-wider uppercase"
              onClick={() => {
                if (pathname.includes("/contact")) {
                  const el = document.getElementById("quote-form");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    const input = document.getElementById("fullName");
                    if (input) (input as HTMLElement).focus();
                  }
                }
              }}
            >
              START A PROJECT →
            </Button>

            {/* Luxury Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-10 h-10 flex items-center justify-center text-stone-200 bg-white/5 border border-white/15 rounded-md hover:border-[#C89552] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C89552] cursor-pointer touch-manipulation active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#08171A]/98 backdrop-blur-2xl border-b border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] py-5 px-5 space-y-4 max-h-[85vh] overflow-y-auto z-[1000] pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Location & License Header Badge */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-stone-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D3A15D]" />
              <span className="font-medium">Surrey &amp; Greater Vancouver, BC</span>
            </div>
            <span className="text-[10px] font-bold tracking-wider text-[#D3A15D] uppercase bg-[#C89552]/10 border border-[#C89552]/30 px-2 py-0.5">
              LICENSED GC
            </span>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive = isRouteActive(pathname, item.href);
              return (
                <div key={item.label} className="border-b border-white/5 pb-1">
                  {item.children ? (
                    <div>
                      <div className={`flex items-center justify-between py-2.5 px-2 rounded transition-colors ${isActive ? "bg-white/5" : ""}`}>
                        <Link
                          href={item.href}
                          prefetch={true}
                          onClick={() => handleLinkClick(item.href)}
                          className={`text-sm font-bold tracking-widest uppercase cursor-pointer flex-1 ${
                            isActive ? "text-[#D3A15D]" : "text-white hover:text-[#D3A15D]"
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                          className="p-1.5 text-[#D3A15D] cursor-pointer hover:bg-white/10 rounded"
                          aria-label="Toggle Submenu"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileSubmenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {mobileSubmenuOpen && (
                        <div className="pl-3 my-1.5 border-l-2 border-[#C89552] space-y-1">
                          {item.children.map((subItem) => {
                            const isSubActive = isSubItemActive(pathname, subItem.href);
                            const isAll = subItem.label.includes("ALL");
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                prefetch={true}
                                onClick={() => handleLinkClick(subItem.href)}
                                className={`block text-xs py-2 px-2.5 rounded transition-all cursor-pointer touch-manipulation ${
                                  isSubActive
                                    ? "bg-[#C89552]/20 text-[#D3A15D] font-bold border-l-2 border-[#C89552]"
                                    : isAll
                                    ? "text-[#D3A15D] font-bold bg-white/5 border border-white/10 my-1"
                                    : "text-stone-200 hover:text-[#D3A15D] hover:bg-white/5 font-medium"
                                }`}
                              >
                                <span>{subItem.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      prefetch={true}
                      onClick={() => handleLinkClick(item.href)}
                      className={`flex items-center justify-between py-2.5 px-2 rounded text-sm font-bold tracking-widest uppercase cursor-pointer touch-manipulation transition-colors ${
                        isActive
                          ? "text-[#D3A15D] bg-white/5 border-l-2 border-[#C89552]"
                          : "text-white hover:text-[#D3A15D] hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C89552]" />}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTAs & Direct Contact Block */}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <Button
              href="/contact/#quote-form"
              variant="primary"
              size="md"
              className="w-full bg-[#C89552] hover:bg-[#B8803D] text-white font-bold py-3 uppercase tracking-wider text-xs shadow-lg"
              onClick={() => {
                setMobileMenuOpen(false);
                if (pathname.includes("/contact")) {
                  const el = document.getElementById("quote-form");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    const input = document.getElementById("fullName");
                    if (input) (input as HTMLElement).focus();
                  }
                }
              }}
            >
              START A PROJECT →
            </Button>
            <a
              href={companyData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 font-bold text-xs tracking-wider uppercase transition-colors shadow-md rounded"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <div className="bg-white/5 p-3 rounded border border-white/5 text-center text-xs text-stone-300 space-y-1">
              <div>
                Direct Phone: <a href={`tel:${companyData.contact.phoneRaw}`} className="text-[#D3A15D] font-bold hover:underline">{companyData.contact.phone}</a>
              </div>
              <div className="text-[11px] text-stone-400">
                Surrey HQ &bull; Serving Vancouver, Burnaby, Richmond, Coquitlam &amp; Fraser Valley
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
