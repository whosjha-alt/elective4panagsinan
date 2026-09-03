import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { heritageSites } from '@/data/heritageSites';
import { Eyebrow, Heading, Text } from '@/components/atoms/Typography';
import { EditorialImage } from '@/components/atoms/Image';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { HeritageCard } from '@/components/molecules/HeritageCard';

interface DetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return heritageSites.map((site) => ({
    slug: site.slug,
  }));
}

export function generateMetadata({ params }: DetailPageProps): Metadata {
  const site = heritageSites.find((s) => s.slug === params.slug);
  if (!site) return { title: 'Destination Not Found' };

  return {
    title: `${site.name} — ${site.municipality}, Pangasinan`,
    description: site.shortDescription,
  };
}

export default function DestinationDetailPage({ params }: DetailPageProps) {
  const site = heritageSites.find((s) => s.slug === params.slug);

  if (!site) {
    notFound();
  }

  const relatedSites = heritageSites
    .filter((s) => s.slug !== site.slug)
    .slice(0, 3);

  return (
    <article className="flex flex-col gap-14 sm:gap-20 pb-24 sm:pb-32 pt-8 sm:pt-12">
      {/* BREADCRUMB & HEADER */}
      <div className="editorial-container">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-ui text-ink-subtle uppercase tracking-wider mb-6">
          <Link href="/" className="hover:text-palm transition-colors">Home</Link>
          <span className="text-cloud-dark">/</span>
          <Link href="/destinations" className="hover:text-palm transition-colors">Destinations</Link>
          <span className="text-cloud-dark">/</span>
          <span className="text-palm font-medium truncate max-w-[200px] sm:max-w-none">{site.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-cloud pb-10">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <Eyebrow accent>{site.id} · {site.category}</Eyebrow>
              <span className="w-1 h-1 rounded-full bg-cloud-dark" />
              <span className="font-ui text-xs text-ink-subtle uppercase tracking-wider">
                {site.historicalPeriod.split('(')[0].trim()}
              </span>
            </div>
            <Heading level={1} variant="major">
              {site.name}
            </Heading>
            <p className="font-ui text-sm sm:text-base text-palm font-medium flex items-center gap-1.5">
              <Icon name="map-pin" size={16} />
              <span>{site.location}</span>
            </p>
          </div>

          <div className="lg:col-span-5 pb-1 space-y-2">
            <p className="font-display text-lg sm:text-xl text-indigo-midnight font-medium leading-snug italic">
              “{site.tagline}”
            </p>
            <Text size="base" muted>
              {site.shortDescription}
            </Text>
          </div>
        </div>
      </div>

      {/* LARGE CINEMATIC IMAGE */}
      <div className="editorial-container">
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-hero overflow-hidden shadow-subtle">
          <EditorialImage
            src={site.image}
            alt={site.imageAlt}
            priority
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-indigo-midnight/80 backdrop-blur-md text-porcelain px-4 py-2 rounded-editorial text-xs font-ui tracking-wider uppercase">
            {site.name} · {site.municipality}
          </div>
        </div>
      </div>

      {/* TWO-COLUMN EDITORIAL CONTENT */}
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <Eyebrow>Provincial Chronicle</Eyebrow>
              <Heading level={2} variant="secondary">
                The Story & Landscape
              </Heading>
              <p className="font-ui text-base sm:text-lg text-ink leading-[1.75]">
                {site.description}
              </p>
            </div>

            {site.curatorNote && (
              <div className="p-6 sm:p-7 bg-cloud-light border-l-2 border-palm rounded-r-editorial space-y-2">
                <span className="font-ui text-xs font-semibold uppercase tracking-wider text-palm block">
                  Curator Note
                </span>
                <p className="font-ui text-sm sm:text-base text-ink-muted italic leading-relaxed">
                  {site.curatorNote}
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-cloud space-y-3">
              <div className="flex items-center gap-2 text-indigo-midnight font-display text-lg font-medium">
                <Icon name="clock" size={18} className="text-palm" />
                <span>Field Recommendation & Best Hours</span>
              </div>
              <p className="font-ui text-sm sm:text-base text-ink-muted leading-relaxed">
                {site.travelTip}
              </p>
            </div>
          </div>

          {/* Practical Vitals (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-8 bg-cloud/40 p-6 sm:p-8 rounded-image border border-cloud">
            <div className="space-y-2 border-b border-cloud pb-4">
              <span className="font-ui text-xs uppercase tracking-wider font-semibold text-palm">
                Destination Vitals
              </span>
              <h3 className="font-display text-xl text-indigo-midnight font-medium">
                Essential Details
              </h3>
            </div>

            <div className="space-y-3">
              <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Key Highlights
              </h4>
              <ul className="space-y-2.5 font-ui text-sm text-ink">
                {site.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-palm mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5 pt-4 border-t border-cloud">
              <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Optimal Season
              </h4>
              <p className="font-ui text-sm text-ink">
                {site.bestTime}
              </p>
            </div>

            <div className="space-y-1.5 pt-4 border-t border-cloud">
              <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Historical Era
              </h4>
              <p className="font-ui text-sm text-ink">
                {site.historicalPeriod}
              </p>
            </div>

            <div className="pt-4">
              <Button href="/destinations" variant="secondary" size="md" className="w-full">
                ← Back to all destinations
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED DESTINATIONS */}
      <section className="editorial-container pt-8 border-t border-cloud" aria-label="Related Destinations">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <Eyebrow accent>Continue Exploring</Eyebrow>
            <Heading level={2} variant="secondary">
              Other destinations in Pangasinan
            </Heading>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold uppercase tracking-wider text-indigo-midnight hover:text-palm transition-colors"
          >
            <span>View All</span>
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedSites.map((relatedSite, idx) => (
            <HeritageCard
              key={relatedSite.slug}
              site={relatedSite}
              index={idx}
              aspectRatio="portrait"
            />
          ))}
        </div>
      </section>
    </article>
  );
}
