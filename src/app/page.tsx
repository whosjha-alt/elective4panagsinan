import React from 'react';
import Link from 'next/link';
import { heritageSites } from '@/data/heritageSites';
import { Eyebrow, Heading, Text } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { EditorialImage } from '@/components/atoms/Image';
import { HeritageCard } from '@/components/molecules/HeritageCard';
import { Icon } from '@/components/atoms/Icon';

export default function HomePage() {
  const featuredSites = heritageSites.slice(0, 3);
  const previewList = heritageSites.slice(1, 6);

  return (
    <div className="flex flex-col gap-24 sm:gap-32 lg:gap-36 pb-24 sm:pb-32">
      {/* SECTION 1: EDITORIAL MOSAIC HERO */}
      <section className="relative w-full pt-10 sm:pt-16 lg:pt-20" aria-label="Hero Showcase">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[620px] lg:min-h-[720px]">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
              <div className="space-y-2">
                <Eyebrow accent>Pangasinan · Philippines</Eyebrow>
                <Heading level={1} variant="display">
                  Stories shaped by land and sea.
                </Heading>
              </div>

              <Text size="lg" muted className="editorial-prose">
                Discover places where coast, sacred sanctuaries, and two million years of geological wonder quietly converge.
              </Text>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/destinations" variant="primary" size="lg" withArrow>
                  Explore destinations
                </Button>
                <Button href="/heritage" variant="secondary" size="lg">
                  Our Living Heritage
                </Button>
              </div>

              {/* Minimal stats / editorial coordinates */}
              <div className="pt-6 border-t border-cloud flex items-center gap-8 text-xs font-ui text-ink-subtle uppercase tracking-wider">
                <div>
                  <span className="block font-display text-lg text-indigo-midnight font-medium">124</span>
                  <span>Islets in the Gulf</span>
                </div>
                <div className="w-px h-8 bg-cloud" />
                <div>
                  <span className="block font-display text-lg text-indigo-midnight font-medium">1905</span>
                  <span>Cape Beacon</span>
                </div>
                <div className="w-px h-8 bg-cloud" />
                <div>
                  <span className="block font-display text-lg text-indigo-midnight font-medium">400+</span>
                  <span>Years of Sanctuary</span>
                </div>
              </div>
            </div>

            {/* Right Asymmetrical Editorial Image Mosaic */}
            <div className="lg:col-span-7 relative h-[420px] sm:h-[520px] lg:h-[680px] w-full flex items-center justify-end">
              {/* Dominant Main Image */}
              <div className="w-[82%] sm:w-[78%] h-[82%] sm:h-[88%] relative rounded-image overflow-hidden shadow-subtle z-0">
                <EditorialImage
                  src="/images/hero.jpg"
                  alt="Panoramic view of the Pangasinan coastline and Hundred Islands"
                  priority
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-indigo-midnight/80 backdrop-blur-md text-porcelain px-3 py-1.5 rounded-editorial text-[11px] font-ui tracking-wider uppercase">
                  Lingayen Gulf Horizon
                </div>
              </div>

              {/* Overlapping Smaller Supporting Image */}
              <div className="hidden sm:block absolute -bottom-4 lg:-bottom-6 left-0 sm:left-4 w-[46%] sm:w-[42%] aspect-[4/5] rounded-image overflow-hidden shadow-hover border-4 border-porcelain z-20">
                <EditorialImage
                  src="/images/bolinao-lighthouse.jpg"
                  alt="Cape Bolinao Lighthouse against coastal cliffs"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-porcelain/90 backdrop-blur-md text-indigo-midnight px-2.5 py-1 rounded-editorial text-[10px] font-ui font-semibold tracking-wider uppercase">
                  Cape Bolinao · 1905
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION BAND */}
      <section className="w-full py-10 border-y border-cloud" aria-label="Province Introduction">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline">
            <div className="md:col-span-4">
              <Eyebrow>Discover The Province</Eyebrow>
              <h2 className="font-display text-xl sm:text-2xl text-indigo-midnight font-medium mt-2">
                A place of salt, stone, and azure currents.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-indigo-midnight font-medium leading-[1.25] tracking-tight mb-6">
                Pangasinan is where islands, living heritage, and everyday coastal rhythm meet along the grand curve of northern Luzon.
              </p>
              <Text size="base" muted className="max-w-2xl leading-relaxed">
                Named after its ancient artisanal trade—<em>panag-asinan</em>, the place where salt is made—the province unfolds from the volcanic foothills of Mt. Balungao across fertile agricultural valleys to the limestone towers of Lingayen Gulf and the open waters of the West Philippine Sea.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED DESTINATIONS */}
      <section className="editorial-container" aria-label="Selected Destinations">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-2">
            <Eyebrow accent>Curated Gallery</Eyebrow>
            <Heading level={2} variant="major">
              Selected places
            </Heading>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-indigo-midnight hover:text-palm transition-colors group"
          >
            <span>View all 6 destinations</span>
            <Icon
              name="arrow-right"
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featuredSites.map((site, index) => (
            <HeritageCard
              key={site.slug}
              site={site}
              index={index}
              aspectRatio="portrait"
            />
          ))}
        </div>
      </section>

      {/* SECTION 4: FEATURE STORY */}
      <section className="editorial-container" aria-label="Feature Story">
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-cloud pb-4">
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-palm">
              Featured Story · 01
            </span>
            <span className="font-ui text-xs text-ink-subtle uppercase tracking-wider">
              Alaminos City, Pangasinan
            </span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <Heading level={2} variant="major">
              A hundred ways to see the sea.
            </Heading>
            <Text size="lg" muted>
              One hundred and twenty-four ancient limestone islets scatter across the turquoise surface of Lingayen Gulf like jewels in the sun.
            </Text>
          </div>

          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-hero overflow-hidden shadow-subtle group">
            <EditorialImage
              src="/images/hundred-islands.jpg"
              alt="Panoramic vista of ancient limestone islands in Hundred Islands National Park"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
              hoverZoom
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-indigo-midnight/80 backdrop-blur-md text-porcelain px-4 py-2 rounded-editorial text-xs font-ui tracking-wider uppercase">
              Governor’s Island Channel · Alaminos
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
            <div className="md:col-span-8 space-y-4">
              <p className="font-ui text-[16px] sm:text-[18px] text-ink leading-relaxed">
                Formed during the Pleistocene Epoch over two million years ago from prehistoric coral beds, the archipelago emerged when ancient sea levels receded. Weathering by wind and sea carved the distinctive mushroom profiles of each islet, while secluded caverns, tidal pools, and coral reefs formed beneath.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Button href="/destinations/hundred-islands" variant="primary" size="lg" withArrow>
                Explore this place
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CULTURE FEATURE */}
      <section className="w-full bg-indigo-midnight text-porcelain py-20 sm:py-28" aria-label="Culture Showcase">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-2">
                <Eyebrow className="!text-mango">Living Heritage & Culture</Eyebrow>
                <Heading level={2} variant="major" light>
                  Places remember what people carry forward.
                </Heading>
              </div>

              <p className="font-ui text-base sm:text-lg text-porcelain/85 leading-relaxed">
                From the 17th-century black coral buttresses of Bolinao to the enduring Marian pilgrimages in Manaoag, the soul of Pangasinan resides in sacred stones, coastal belfries, and communal memories safeguarded across centuries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-mango/20 text-mango flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="compass" size={14} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-porcelain font-medium">Earthquake Baroque Architecture</h3>
                    <p className="font-ui text-sm text-porcelain/70">Fortress churches constructed with weathered coral blocks quarried directly from coastal reefs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-mango/20 text-mango flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="sparkles" size={14} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-porcelain font-medium">Centuries of Faith & Pilgrimage</h3>
                    <p className="font-ui text-sm text-porcelain/70">Sacred devotions to Our Lady of the Rosary of Manaoag bringing millions together since 1605.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/heritage" variant="terracotta" size="lg" withArrow>
                  Read the heritage story
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-image overflow-hidden shadow-subtle">
                  <EditorialImage
                    src="/images/culture.jpg"
                    alt="Historic colonial architectural detail and cultural artifacts in Pangasinan"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                    hoverZoom
                  />
                </div>
                <p className="font-ui text-xs text-porcelain/60 italic">
                  Sacred heritage & traditional architecture
                </p>
              </div>

              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-image overflow-hidden shadow-subtle">
                  <EditorialImage
                    src="/images/st-james-church.jpg"
                    alt="St. James the Great Parish coral stone walls in Bolinao"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                    hoverZoom
                  />
                </div>
                <p className="font-ui text-xs text-porcelain/60 italic">
                  Black coral masonry · St. James Parish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DESTINATION PREVIEW */}
      <section className="editorial-container" aria-label="Destination Preview Directory">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 border-b border-cloud pb-6 gap-4">
          <div>
            <Eyebrow>Provincial Index</Eyebrow>
            <Heading level={2} variant="major">
              More destinations to discover
            </Heading>
          </div>
          <p className="font-ui text-xs uppercase tracking-wider text-ink-subtle">
            Select any location to view full editorial guide
          </p>
        </div>

        <div className="divide-y divide-cloud">
          {previewList.map((site, i) => {
            const rowNumber = String(i + 2).padStart(2, '0');
            return (
              <Link
                key={site.slug}
                href={`/destinations/${site.slug}`}
                className="group py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-cloud-light/60 px-3 -mx-3 rounded-editorial"
              >
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="font-ui text-sm font-semibold text-palm w-6">
                    {rowNumber}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-indigo-midnight font-medium group-hover:text-palm transition-colors">
                      {site.name}
                    </h3>
                    <p className="font-ui text-xs text-ink-subtle mt-0.5 sm:hidden">
                      {site.location} · {site.category}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-12 text-sm font-ui text-ink-muted">
                  <span className="w-36">{site.municipality}</span>
                  <span className="w-24 font-medium text-palm">{site.category}</span>
                  <span className="inline-flex items-center gap-1 text-indigo-midnight font-medium group-hover:text-palm">
                    <span>Explore</span>
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="editorial-container pt-8" aria-label="Final Destination Invitation">
        <div className="py-20 sm:py-28 border-t border-cloud flex flex-col items-center text-center space-y-6">
          <Eyebrow accent>Begin Your Journey</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-indigo-midnight font-medium max-w-2xl leading-[1.08] tracking-tight">
            Where will Pangasinan take you next?
          </h2>
          <p className="font-ui text-base sm:text-lg text-ink-muted max-w-md">
            Browse all natural monuments, historical sanctuaries, and tranquil shores across our interactive province catalog.
          </p>
          <div className="pt-4">
            <Button href="/destinations" variant="primary" size="lg" withArrow>
              Explore all destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
