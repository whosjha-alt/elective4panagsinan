import React from 'react';
import Link from 'next/link';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-indigo-midnight text-porcelain mt-auto border-t border-white/10">
      <div className="editorial-container py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-mango" />
                <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-mango">
                  Official Heritage Showcase
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-porcelain mb-4">
                PANGASINAN
              </h2>
              <p className="font-ui text-sm sm:text-[15px] text-porcelain/75 leading-relaxed max-w-md">
                A curated digital showcase chronicling the living coastline, historic sanctuaries, and timeless geological wonders of the province of Pangasinan.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="font-ui text-xs text-porcelain/60 uppercase tracking-wider mb-1">
                Showcase Curator & Developer
              </p>
              <p className="font-display text-lg text-porcelain font-medium">
                Jan Jhared Antolin
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="font-ui text-xs uppercase tracking-[0.18em] font-semibold text-mango">
              Explore Index
            </h3>
            <ul className="space-y-3 font-ui text-sm">
              <li>
                <Link
                  href="/"
                  className="text-porcelain/80 hover:text-porcelain transition-colors inline-block"
                >
                  Home Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-porcelain/80 hover:text-porcelain transition-colors inline-block"
                >
                  All Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/heritage"
                  className="text-porcelain/80 hover:text-porcelain transition-colors inline-block"
                >
                  Heritage & Living Culture
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/hundred-islands"
                  className="text-porcelain/80 hover:text-porcelain transition-colors inline-block"
                >
                  Hundred Islands
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/bolinao-lighthouse"
                  className="text-porcelain/80 hover:text-porcelain transition-colors inline-block"
                >
                  Cape Bolinao Lighthouse
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Highlights Column */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h3 className="font-ui text-xs uppercase tracking-[0.18em] font-semibold text-mango">
              Heritage Municipalities
            </h3>
            <div className="space-y-3 font-ui text-sm text-porcelain/75">
              <div>
                <span className="block text-porcelain font-medium">Alaminos City</span>
                <span className="text-xs text-porcelain/60">Hundred Islands Marine Sanctuary</span>
              </div>
              <div>
                <span className="block text-porcelain font-medium">Cape Bolinao</span>
                <span className="text-xs text-porcelain/60">1905 Maritime Lighthouse & Patar Coral Coast</span>
              </div>
              <div>
                <span className="block text-porcelain font-medium">Manaoag</span>
                <span className="text-xs text-porcelain/60">Minor Basilica & Centuries of Sacred Marian Devotion</span>
              </div>
              <div>
                <span className="block text-porcelain font-medium">Balungao</span>
                <span className="text-xs text-porcelain/60">Mt. Balungao Volcanic Hot Springs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-porcelain/60 gap-4 font-ui">
          <p>© {new Date().getFullYear()} Pangasinan Heritage Digital Showcase. Crafted by Jan Jhared Antolin.</p>
          <div className="flex items-center gap-6">
            <span>Region I · Ilocos Region</span>
            <span className="inline-block w-1 h-1 rounded-full bg-porcelain/30" />
            <span>Republic of the Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
