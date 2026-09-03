import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Eyebrow, Heading, Text } from '@/components/atoms/Typography';
import { EditorialImage } from '@/components/atoms/Image';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export const metadata: Metadata = {
  title: 'Heritage & Living Culture',
  description:
    'Explore the enduring cultural soul of Pangasinan—from centuries-old earthquake baroque stone churches to ancient coastal salt-harvesting traditions.',
};

export default function HeritageCulturePage() {
  return (
    <article className="flex flex-col gap-24 sm:gap-32 lg:gap-36 pb-24 sm:pb-32 pt-10 sm:pt-14">
      {/* 31. HERITAGE HERO: TYPOGRAPHY-FIRST + WIDE IMAGE */}
      <section className="editorial-container" aria-label="Heritage Hero">
        <div className="space-y-8 max-w-4xl">
          <div className="space-y-3">
            <Eyebrow accent>Heritage & Living Culture</Eyebrow>
            <Heading level={1} variant="display">
              What a place chooses to remember.
            </Heading>
          </div>
          <p className="font-display text-2xl sm:text-3xl text-indigo-midnight/90 font-normal leading-[1.3] max-w-2xl">
            Beyond scenic beaches and coral formations lies a province forged by seafaring resilience, monastic sanctuaries, and the sacred craft of salt.
          </p>
        </div>

        <div className="mt-12 relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-hero overflow-hidden shadow-subtle">
          <EditorialImage
            src="/images/about-hero.jpg"
            alt="Historic coastal architecture and heritage landscape of Pangasinan"
            priority
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-indigo-midnight/80 backdrop-blur-md text-porcelain px-4 py-2 rounded-editorial text-xs font-ui tracking-wider uppercase">
            Pangasinan Historic Sanctuary & Colonial Coastline
          </div>
        </div>
      </section>

      {/* 32. EDITORIAL BLOCK 1: IMAGE LEFT / TEXT RIGHT */}
      <section className="editorial-container" aria-label="Faith and Architecture">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] sm:aspect-[16/11] rounded-image overflow-hidden shadow-subtle">
              <EditorialImage
                src="/images/st-james-church.jpg"
                alt="Ancient black coral masonry at St. James the Great Parish in Bolinao"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
                hoverZoom
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-ui text-ink-subtle">
              <span>St. James the Great Parish · Bolinao</span>
              <span className="uppercase tracking-wider font-semibold text-palm">Founded 1609</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <Eyebrow>Sanctuaries of Stone</Eyebrow>
              <Heading level={2} variant="major">
                Carved from the sea to withstand time.
              </Heading>
            </div>
            <Text size="lg" muted>
              When Spanish Augustinians and Dominican missionaries established settlements along Lingayen Gulf in the late 16th and early 17th centuries, builders faced relentless typhoons, high seismic activity, and coastal pirate incursions.
            </Text>
            <p className="font-ui text-base sm:text-[17px] text-ink leading-relaxed">
              Their architectural response was Philippine <em>Earthquake Baroque</em>: monumental fortress churches characterized by exceptionally thick walls, heavy low buttresses, and stone quarried straight from fossilized black coral banks along the shores of Bolinao. Today, looking at the mortar still reveals calcified shells and ancient ocean organisms embedded in holy facades.
            </p>
            <div className="pt-2">
              <Button href="/destinations/st-james-the-great-parish" variant="secondary" size="md" withArrow>
                Read about St. James Parish
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 32. EDITORIAL BLOCK 2: LARGE TYPOGRAPHY / SMALL SUPPORTING IMAGE */}
      <section className="w-full bg-cloud-light py-20 sm:py-28 border-y border-cloud" aria-label="Etymology and Salt Heritage">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow accent>The Living Craft of Salt</Eyebrow>
              <Heading level={2} variant="major">
                “Panag-asinan” — The land where salt is born.
              </Heading>
              <p className="font-display text-2xl sm:text-3xl text-indigo-midnight font-medium leading-snug">
                Long before colonial cartographers inscribed its borders, the western coast was defined by the ancient artisanal alchemy of seawater, fire, and sun.
              </p>
              <Text size="base" muted className="leading-relaxed">
                The name <em>Pangasinan</em> originates from the prefix <em>pang-</em> and root word <em>asin</em> (salt), translated literally as “the place where salt is made.” Coastal families have tended <em>irasan</em> (salt pans) for countless generations, evaporating high-salinity tidal currents under searing tropical sun or boiling brine in earthenware vessels to produce the prized white floral crystals that seasoned historic Pacific trading routes.
              </Text>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-cloud">
                <div>
                  <span className="font-display text-xl text-indigo-midnight font-semibold block">Irasan</span>
                  <span className="font-ui text-xs text-ink-subtle uppercase tracking-wider">Tidal Salt Beds</span>
                </div>
                <div>
                  <span className="font-display text-xl text-indigo-midnight font-semibold block">Bangus</span>
                  <span className="font-ui text-xs text-ink-subtle uppercase tracking-wider">Dagupan Aquaculture</span>
                </div>
                <div>
                  <span className="font-display text-xl text-indigo-midnight font-semibold block">Buri</span>
                  <span className="font-ui text-xs text-ink-subtle uppercase tracking-wider">Traditional Weaving</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center sm:items-end">
              <div className="w-full sm:w-[90%] aspect-[3/4] rounded-image overflow-hidden shadow-subtle border-2 border-porcelain">
                <EditorialImage
                  src="/images/culture.jpg"
                  alt="Intricate cultural artifacts and living heritage of Pangasinan"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                  hoverZoom
                />
              </div>
              <p className="font-ui text-xs text-ink-subtle mt-3 italic text-left sm:text-right w-full sm:w-[90%]">
                Artisanal heritage preserved across Pangasinan coastal villages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 32. EDITORIAL BLOCK 3: FULL-WIDTH IMAGE / CAPTION / STORY */}
      <section className="editorial-container" aria-label="Sacred Pilgrimage">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-cloud pb-4">
            <div className="space-y-1">
              <Eyebrow>Spiritual Horizon</Eyebrow>
              <h2 className="font-display text-2xl sm:text-3xl text-indigo-midnight font-medium">
                The Pilgrim’s Haven at Manaoag
              </h2>
            </div>
            <span className="font-ui text-xs text-ink-subtle uppercase tracking-wider">
              Founded 1605 · Manaoag, Pangasinan
            </span>
          </div>

          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-hero overflow-hidden shadow-subtle">
            <EditorialImage
              src="/images/manaoag-church.jpg"
              alt="Historic Minor Basilica of Our Lady of the Rosary of Manaoag in Pangasinan"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
              hoverZoom
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-indigo-midnight/80 backdrop-blur-md text-porcelain px-4 py-2 rounded-editorial text-xs font-ui tracking-wider uppercase">
              Minor Basilica of Our Lady of Manaoag
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            <div className="lg:col-span-8 space-y-4">
              <p className="font-display text-xl sm:text-2xl text-indigo-midnight font-medium leading-snug">
                In 1605, on a wooded hilltop where a farming native saw an apparition of the Virgin Mary, arose one of Southeast Asia’s most sacred Catholic pilgrimage epicenters.
              </p>
              <p className="font-ui text-base sm:text-[17px] text-ink leading-relaxed">
                Known reverently as <em>Apo Baket</em>, Our Lady of Manaoag is honored by millions each year who journey from every corner of the archipelago. The sanctuary houses centuries of liturgical ex-votos, historic handwritten registers, and ivory carvings that survived earthquakes, fires, and the bombardments of World War II.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 bg-porcelain p-6 rounded-image border border-cloud">
              <span className="font-ui text-xs font-semibold uppercase tracking-wider text-palm">
                Pilgrim Experience
              </span>
              <p className="font-ui text-sm text-ink-muted leading-relaxed">
                Wander through the parish cloisters and sacred relic museum, then sample warm <em>tupig</em>—glutinous rice roasted with coconut shreds in banana leaves—from vendors outside the basilica gates.
              </p>
              <Button href="/destinations/minor-basilica-of-our-lady-of-manaoag" variant="primary" size="md" withArrow>
                Explore the Basilica
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INVITATION */}
      <section className="editorial-container pt-8 border-t border-cloud text-center space-y-6">
        <Eyebrow accent>Experience It In Person</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl text-indigo-midnight font-medium">
          Walk through four hundred years of living memory.
        </h2>
        <div className="pt-2">
          <Button href="/destinations" variant="primary" size="lg" withArrow>
            Browse all heritage destinations
          </Button>
        </div>
      </section>
    </article>
  );
}
