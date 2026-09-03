import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'palm' | 'mango' | 'terracotta' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'palm',
  className = '',
}) => {
  const styles = {
    palm: 'text-palm bg-palm/10 border-palm/20',
    mango: 'text-[#9A701A] bg-mango/15 border-mango/25',
    terracotta: 'text-terracotta bg-terracotta/10 border-terracotta/20',
    subtle: 'text-ink-muted bg-cloud border-cloud-dark',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-ui font-medium tracking-wider uppercase rounded-editorial border ${styles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
      {children}
    </span>
  );
};
