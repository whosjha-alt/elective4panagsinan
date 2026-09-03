import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className = '',
  accent = false,
}) => {
  return (
    <span
      className={`inline-block font-ui text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] ${
        accent ? 'text-mango' : 'text-palm'
      } ${className}`}
    >
      {children}
    </span>
  );
};

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  variant?: 'display' | 'major' | 'secondary' | 'card' | 'sub';
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  as,
  variant = 'major',
  children,
  className = '',
  light = false,
}) => {
  const Component = as || (`h${level}` as const);

  const variantStyles = {
    display:
      'font-display text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.96] tracking-[-0.03em] font-medium',
    major:
      'font-display text-[clamp(2.1rem,4.5vw,3.75rem)] leading-[1.04] tracking-[-0.025em] font-medium',
    secondary:
      'font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.12] tracking-[-0.02em] font-medium',
    card:
      'font-display text-[1.3rem] sm:text-[1.55rem] leading-[1.18] tracking-[-0.015em] font-medium',
    sub:
      'font-display text-lg sm:text-xl leading-snug font-medium',
  };

  const textColor = light ? 'text-porcelain' : 'text-indigo-midnight';

  return (
    <Component className={`${variantStyles[variant]} ${textColor} ${className}`}>
      {children}
    </Component>
  );
};

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
  muted?: boolean;
  light?: boolean;
  as?: 'p' | 'span' | 'div';
}

export const Text: React.FC<TextProps> = ({
  children,
  className = '',
  size = 'base',
  muted = false,
  light = false,
  as: Component = 'p',
}) => {
  const sizeStyles = {
    sm: 'text-sm leading-relaxed',
    base: 'text-[15px] sm:text-[17px] leading-[1.68]',
    lg: 'text-lg sm:text-xl leading-[1.6]',
  };

  let textColor = 'text-ink';
  if (light) textColor = 'text-porcelain/90';
  else if (muted) textColor = 'text-ink-muted';

  return (
    <Component className={`font-ui ${sizeStyles[size]} ${textColor} ${className}`}>
      {children}
    </Component>
  );
};
