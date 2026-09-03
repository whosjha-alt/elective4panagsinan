import React from 'react';
import { HeritageSite } from '@/types/heritage';
import { HeritageCard } from '../molecules/HeritageCard';

interface HeritageGridProps {
  sites: HeritageSite[];
  columns?: 2 | 3;
  className?: string;
  featuredComposition?: boolean;
}

export const HeritageGrid: React.FC<HeritageGridProps> = ({
  sites,
  columns = 3,
  className = '',
  featuredComposition = false,
}) => {
  if (sites.length === 0) {
    return (
      <div className="text-center py-16 border border-dashed border-cloud-dark rounded-image">
        <p className="font-display text-2xl text-indigo-midnight mb-2">No destinations found</p>
        <p className="font-ui text-ink-muted text-sm">Try adjusting your search criteria or filter selection.</p>
      </div>
    );
  }

  const gridColStyles = columns === 3
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 lg:gap-10'
    : 'grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10';

  return (
    <section className={`${gridColStyles} ${className}`} aria-label="Destinations Gallery">
      {sites.map((site, index) => {
        const cardAspect = featuredComposition && index === 1 ? 'landscape' : 'portrait';

        return (
          <HeritageCard
            key={site.slug}
            site={site}
            index={index}
            aspectRatio={featuredComposition ? cardAspect : 'portrait'}
          />
        );
      })}
    </section>
  );
};
