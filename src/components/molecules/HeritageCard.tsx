import React from 'react';
import Link from 'next/link';
import { HeritageSite } from '@/types/heritage';
import { EditorialImage } from '../atoms/Image';
import { Icon } from '../atoms/Icon';

interface HeritageCardProps {
  site: HeritageSite;
  index?: number;
  aspectRatio?: 'portrait' | 'landscape';
  className?: string;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({
  site,
  index,
  aspectRatio = 'portrait',
  className = '',
}) => {
  const indexFormatted = index !== undefined ? String(index + 1).padStart(2, '0') : site.id;

  return (
    <article className={`group flex flex-col ${className}`}>
      <Link
        href={`/destinations/${site.slug}`}
        className="block overflow-hidden rounded-image focus-visible:outline focus-visible:outline-2 focus-visible:outline-palm"
        aria-label={`View details for ${site.name}`}
      >
        <EditorialImage
          src={site.image}
          alt={site.imageAlt}
          aspectRatio={aspectRatio}
          radius="md"
          hoverZoom
        />
      </Link>

      <div className="pt-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-xs font-ui font-medium tracking-wider uppercase text-palm mb-2">
          <span>{indexFormatted} / {site.category}</span>
          <span className="text-ink-subtle text-[11px] font-normal">{site.historicalPeriod.split('(')[0].trim()}</span>
        </div>

        <h3 className="font-display text-[1.4rem] sm:text-[1.55rem] text-indigo-midnight font-medium leading-[1.18] tracking-[-0.015em] mb-1.5 group-hover:text-palm transition-colors duration-200">
          <Link href={`/destinations/${site.slug}`}>
            {site.name}
          </Link>
        </h3>

        <div className="flex items-center justify-between text-sm text-ink-muted mt-auto pt-2 border-t border-cloud">
          <span className="flex items-center gap-1.5 font-ui">
            <Icon name="map-pin" size={14} className="text-palm flex-shrink-0" />
            <span>{site.location}</span>
          </span>

          <Link
            href={`/destinations/${site.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-indigo-midnight hover:text-palm transition-colors"
            aria-hidden="true"
            tabIndex={-1}
          >
            <span>Explore</span>
            <Icon
              name="arrow-right"
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};
