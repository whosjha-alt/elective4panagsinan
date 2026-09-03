'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItemProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  isMobile?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  label,
  onClick,
  className = '',
  isMobile = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  if (isMobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`block font-display text-3xl sm:text-4xl py-3.5 transition-colors ${
          isActive ? 'text-mango font-semibold' : 'text-porcelain hover:text-mango'
        } ${className}`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative font-ui text-[14px] sm:text-[15px] font-medium tracking-wide transition-colors py-1.5 ${
        isActive
          ? 'text-indigo-midnight font-semibold'
          : 'text-ink-muted hover:text-indigo-midnight'
      } ${className}`}
    >
      <span>{label}</span>
      {isActive && (
        <span
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-palm rounded-full"
          aria-hidden="true"
        />
      )}
    </Link>
  );
};
