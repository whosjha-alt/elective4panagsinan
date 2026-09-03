import React from 'react';
import Link from 'next/link';
import { Icon } from './Icon';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'terracotta';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  withArrow?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  withArrow = false,
  ariaLabel,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-ui font-medium tracking-wide transition-all duration-200 cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-palm group';

  const sizeStyles = {
    sm: 'text-xs h-9 px-4 rounded-editorial gap-1.5',
    md: 'text-sm h-12 px-6 rounded-card gap-2.5',
    lg: 'text-base h-13 px-8 rounded-card gap-3',
  };

  const variantStyles = {
    primary:
      'bg-indigo-midnight text-porcelain hover:bg-[#2C324E] active:bg-[#1A1D2F] border border-transparent shadow-subtle',
    secondary:
      'bg-transparent text-indigo-midnight border border-cloud-dark hover:border-indigo-midnight/40 hover:bg-cloud-light active:bg-cloud',
    terracotta:
      'bg-terracotta text-porcelain hover:bg-terracotta-dark active:bg-[#873E2F] border border-transparent',
    text:
      'bg-transparent text-indigo-midnight hover:text-palm p-0 h-auto rounded-none border-none font-medium',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <Icon
          name="arrow-right"
          size={size === 'sm' ? 14 : 16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
