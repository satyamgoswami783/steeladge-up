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
  const current = currentPathname.replace(/\/$/, "") || "/";
  const target = targetHref.replace(/\/$/, "") || "/";
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(true);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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
    }, 150);
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
            className="hidden lg:flex items-center space-x-8 select-none"
            aria-label="Main Navigation"
          >
            {mainNavItems.map((item) => {
              const isActive = isRouteActive(pathname, item.href);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      prefetch={true}
                      onClick={() => setDropdownOpen(false)}
                      className={`relative inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer py-1.5 ${
                        isActive
                          ? "text-[#D3A15D]"
                          : "text-stone-200 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-[#D3A15D]" : isActive ? "text-[#D3A15D]" : "text-stone-400"
                        }`}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C89552]" />
                      )}
                    </Link>

                    {/* Submenu Dropdown Container */}
                    <div
                      className={`absolute top-full left-0 w-[340px] pt-2 z-[1000] transition-all duration-150 ${
                        dropdownOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#0B2025]/98 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2 space-y-1.5 ring-1 ring-black/50">
                        {item.children.map((subItem) => {
                          const isSubActive = isRouteActive(pathname, subItem.href);
                          const isAll = subItem.label.includes("ALL");
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              prefetch={true}
                              onClick={() => setDropdownOpen(false)}
                              className={`group/sub block p-3 transition-all duration-150 rounded-none cursor-pointer border ${
                                isSubActive
                                  ? "bg-[#C89552]/20 border-[#C89552]/60 text-white"
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
                  className={`relative text-xs font-semibold tracking-widest uppercase transition-colors py-2 cursor-pointer ${
                    isActive
                      ? "text-[#D3A15D]"
                      : "text-stone-200 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C89552]" />
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
              href="/contact/"
              variant="primary"
              size="sm"
              className="bg-[#C89552] hover:bg-[#B8803D] border-[#C89552] text-white shadow-lg font-bold"
            >
              START A PROJECT →
            </Button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="flex items-center gap-1 bg-[#C89552]/20 text-[#D3A15D] border border-[#C89552]/40 px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-none hover:bg-[#C89552] hover:text-white transition-all md:hidden"
              aria-label="Call (604) 418-1515"
            >
              <Phone className="w-3 h-3 text-[#D3A15D]" />
              <span>(604) 418-1515</span>
            </a>
            <Button
              href="/contact/"
              variant="primary"
              size="sm"
              className="text-[11px] px-2.5 py-1 md:hidden bg-[#C89552] text-white font-bold"
            >
              START A PROJECT →
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2.5 text-stone-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C89552] cursor-pointer touch-manipulation"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D3A15D]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#08171A] border-b border-white/15 shadow-2xl py-6 px-6 space-y-4 max-h-[85vh] overflow-y-auto z-[1000] pointer-events-auto">
          <div className="flex items-center gap-2 text-stone-300 text-xs font-medium pb-3 border-b border-white/10">
            <MapPin className="w-4 h-4 text-[#D3A15D]" />
            <span>Serving Surrey & Lower Mainland, BC</span>
          </div>

          <div className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive = isRouteActive(pathname, item.href);
              return (
                <div key={item.label} className="border-b border-white/5 pb-1">
                  {item.children ? (
                    <div>
                      <div className="flex items-center justify-between py-2">
                        <Link
                          href={item.href}
                          prefetch={true}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`text-sm font-bold tracking-widest uppercase cursor-pointer ${
                            isActive ? "text-[#D3A15D]" : "text-white hover:text-[#D3A15D]"
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                          className="p-1.5 text-[#D3A15D] cursor-pointer"
                          aria-label="Toggle Submenu"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileSubmenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {mobileSubmenuOpen && (
                        <div className="pl-3 space-y-1 my-1 border-l-2 border-[#C89552]/60">
                          {item.children.map((subItem) => {
                            const isSubActive = isRouteActive(pathname, subItem.href);
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                prefetch={true}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block text-xs font-semibold py-2.5 cursor-pointer touch-manipulation ${
                                  isSubActive ? "text-[#D3A15D]" : "text-stone-200 hover:text-[#D3A15D]"
                                }`}
                              >
                                {subItem.label}
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
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2.5 text-sm font-bold tracking-widest uppercase cursor-pointer touch-manipulation ${
                        isActive ? "text-[#D3A15D]" : "text-white hover:text-[#D3A15D]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Button
              href="/contact/"
              variant="primary"
              size="md"
              className="w-full bg-[#C89552] text-white font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              START A PROJECT →
            </Button>
            <a
              href={companyData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <div className="text-center text-xs text-stone-300 space-y-1">
              <div>
                Call Direct: <a href={`tel:${companyData.contact.phoneRaw}`} className="text-white font-bold hover:underline">{companyData.contact.phone}</a>
              </div>
              <div>
                BC Office: <a href={`tel:${companyData.contact.secondaryPhoneRaw}`} className="text-stone-300 hover:text-white hover:underline">{companyData.contact.secondaryPhone}</a>
              </div>
              <div>
                AB Office: <a href={`tel:${companyData.contact.tertiaryPhoneRaw}`} className="text-stone-300 hover:text-white hover:underline">{companyData.contact.tertiaryPhone}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
