'use client';

import React, { useState, useMemo } from 'react';
import { heritageSites } from '@/data/heritageSites';
import { DestinationCategory } from '@/types/heritage';
import { Eyebrow, Heading, Text } from '@/components/atoms/Typography';
import { SearchForm } from '@/components/molecules/SearchForm';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';

const CATEGORIES: ('All' | DestinationCategory)[] = [
  'All',
  'Nature',
  'Heritage',
  'Landmarks',
  'Coastal',
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | DestinationCategory>('All');

  const filteredSites = useMemo(() => {
    return heritageSites.filter((site) => {
      const matchesCategory =
        selectedCategory === 'All' || site.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        site.name.toLowerCase().includes(q) ||
        site.municipality.toLowerCase().includes(q) ||
        site.location.toLowerCase().includes(q) ||
        site.category.toLowerCase().includes(q) ||
        site.shortDescription.toLowerCase().includes(q) ||
        site.tagline.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-24 sm:pb-32">
      {/* COMPACT EDITORIAL HERO (350-480px) */}
      <section className="w-full bg-porcelain pt-12 sm:pt-16 pb-8 border-b border-cloud" aria-label="Destinations Directory Intro">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end max-w-5xl">
            <div className="md:col-span-7 space-y-3">
              <Eyebrow accent>Pangasinan Directory</Eyebrow>
              <Heading level={1} variant="major">
                Places worth the journey.
              </Heading>
            </div>
            <div className="md:col-span-5 pb-1">
              <Text size="base" muted>
                Browse coastal archipelagos, centuries-old sanctuaries, and therapeutic volcanic springs across the province of Pangasinan.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER BAR */}
      <section className="editorial-container" aria-label="Filter Destinations">
        <div className="space-y-8 max-w-4xl">
          <SearchForm
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by place, municipality, or category (e.g. Bolinao, Nature, Coral)..."
          />

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 border-b border-cloud/60 pb-3">
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle mr-2">
              Filter By:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative font-ui text-xs sm:text-sm font-semibold uppercase tracking-wider py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-palm ${
                    isActive
                      ? 'text-indigo-midnight'
                      : 'text-ink-subtle hover:text-indigo-midnight'
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-palm rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-xs font-ui text-ink-subtle">
            <span>
              Showing {filteredSites.length} of {heritageSites.length} destinations
            </span>
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-palm hover:underline font-medium"
              >
                Reset all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="editorial-container" aria-label="Destinations Results">
        <HeritageGrid sites={filteredSites} columns={3} />
      </section>
    </div>
  );
}
