'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavigationItem } from '../molecules/NavigationItem';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export const HeaderNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/heritage', label: 'Heritage & Culture' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-porcelain/95 backdrop-blur-sm border-b border-cloud transition-all duration-200">
        <div className="editorial-container flex items-center justify-between h-[72px] sm:h-[80px]">
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-palm"
            aria-label="Pangasinan Heritage Showcase Home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-palm transition-transform duration-300 group-hover:scale-125" />
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-indigo-midnight">
                PANGASINAN
              </span>
              <span className="font-ui text-[9px] uppercase tracking-[0.22em] text-ink-subtle font-medium -mt-1">
                Heritage Showcase
              </span>
            </div>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <NavigationItem
                key={link.href}
                href={link.href}
                label={link.label}
              />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              href="/destinations"
              variant="primary"
              size="sm"
              withArrow
            >
              Explore
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center gap-2 p-2 text-indigo-midnight hover:text-palm focus-visible:outline focus-visible:outline-2 focus-visible:outline-palm rounded-editorial"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-sheet"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            <span className="font-ui text-xs font-semibold uppercase tracking-wider">
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </span>
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation-sheet"
        className={`fixed inset-0 z-50 bg-indigo-midnight text-porcelain transition-all duration-300 md:hidden flex flex-col ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="editorial-container flex items-center justify-between h-[68px] border-b border-white/10">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display text-xl font-semibold tracking-wide text-porcelain"
          >
            PANGASINAN
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-porcelain hover:text-mango flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mango"
            aria-label="Close navigation"
          >
            <span className="font-ui text-xs uppercase tracking-wider font-semibold">Close</span>
            <Icon name="close" size={22} />
          </button>
        </div>

        <div className="editorial-container flex flex-col justify-between flex-grow py-12">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Site Links">
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-mango mb-2">
              Index
            </span>
            {navLinks.map((link) => (
              <NavigationItem
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={() => setIsMobileMenuOpen(false)}
                isMobile
              />
            ))}
          </nav>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
            <div>
              <p className="font-ui text-xs uppercase tracking-wider text-porcelain/60 mb-1">
                Student & Developer
              </p>
              <p className="font-display text-lg text-porcelain">
                Jan Jhared Antolin
              </p>
            </div>

            <Button
              href="/destinations"
              variant="terracotta"
              size="md"
              withArrow
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse All Destinations
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
